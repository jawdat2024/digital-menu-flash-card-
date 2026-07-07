/// <reference types="vite/client" />
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, signInAnonymously } from 'firebase/auth';
import appletConfig from './firebase-applet-config.json';

// Initialize Firebase only if it hasn't been initialized yet
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || appletConfig.apiKey || "AIzaSyDY6h7AOVbU5AyhHGB5VEStRO25K9BGclM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || appletConfig.authDomain || "gen-lang-client-0669796641.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || appletConfig.projectId || "gen-lang-client-0669796641",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || appletConfig.storageBucket || "gen-lang-client-0669796641.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || appletConfig.messagingSenderId || "848875455054",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || appletConfig.appId || "1:848875455054:web:0dad052833f21da902f91f",
  firestoreDatabaseId: appletConfig.firestoreDatabaseId || "ai-studio-6c1490b2-500e-4084-972c-0acc1eced820"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId); // CRITICAL: The app will break without this line
const storage = getStorage(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const auth = getAuth(app);
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('🔴 Firestore Error detail JSON String:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface FeedbackPayload {
  category: string;
  description: string;
  customerName: string;
  phoneNumber: string;
  branch: string;
  imageUrl?: string;
  createdAt?: any;
}

/**
 * Uploads an optional photo to Firebase Storage and saves the complete payload to Firestore.
 */
export async function submitCustomerFeedback(
  data: Omit<FeedbackPayload, 'imageUrl' | 'createdAt'>,
  imageFile: File | null
): Promise<string> {
  // Config Warning: Print active projectId being used by the app to check environments
  console.log('--- Firebase Project Configuration Warning ---');
  console.log(`Active Project ID: "${firebaseConfig.projectId}"`);
  console.log(`Database ID: "${firebaseConfig.firestoreDatabaseId}"`);
  console.log(`Storage Bucket: "${firebaseConfig.storageBucket}"`);
  console.log('----------------------------------------------');

  const auth = getAuth(app);

  // 1. Authentication: Try to sign in anonymously. If it fails, log a warning but do not crash the submission, as the Security Rules permit public creation (allow create: if true).
  try {
    if (!auth.currentUser) {
      console.log('Initiating Firebase Anonymous Authentication...');
      const userCredential = await signInAnonymously(auth);
      console.log(`Anonymous Auth successful. Logged in with UID: ${userCredential.user.uid}`);
    } else {
      console.log(`Already authenticated with Firebase. UID: ${auth.currentUser.uid}`);
    }
  } catch (authErr: any) {
    console.warn('⚠️ FIREBASE AUTH WARNING: Failed to authenticate anonymously (Sign-in provider might be disabled in Firebase Console):', authErr);
    console.log('Proceeding with submission anonymously as security rules permit public creation...');
  }

  let imageUrl = '';

  // 2. Isolate the Failure (Crucial) - STORAGE UPLOAD BLOCKED SEPARATELY
  if (imageFile) {
    if (imageFile.size > 10 * 1024 * 1024) {
      alert('Image is too large. Please upload an image under 10MB.');
      throw new Error('Image too large');
    }

    try {
      console.log('Initiating upload to Firebase Storage directory "feedback_uploads/"...');
      const sanitizedName = imageFile.name.replace(/[^a-zA-Z0-9.]/g, '_');
      const storagePath = `feedback_uploads/${Date.now()}_${sanitizedName}`;
      const storageRef = ref(storage, storagePath);
      
      const metadata = {
        contentType: imageFile.type || 'image/jpeg',
      };

      console.log(`[Storage Upload Metadata] Path: ${storagePath}, Size: ${imageFile.size} bytes`);
      const snapshot = await uploadBytes(storageRef, imageFile, metadata);
      imageUrl = await getDownloadURL(snapshot.ref);
      console.log('🟢 STORAGE SUCCESS: Image uploaded successfully! URL:', imageUrl);
    } catch (storageErr: any) {
      console.error('🔴 STORAGE FAILURE: Failed to upload image to feedback_uploads/ within Firebase Storage:', storageErr);
      throw new Error(`Firebase Storage Error: ${storageErr.message || storageErr}`);
    }
  }

  // 3. Isolate the Failure (Crucial) - FIRESTORE DIRECT WRITE BLOCKED SEPARATELY
  const payload = {
    category: data.category,
    details: data.description,
    customerName: data.customerName,
    phoneNumber: data.phoneNumber,
    branch: data.branch,
    imageUrl: imageUrl || null,
    submittedAt: serverTimestamp()
  };

  let docRef;
  try {
    console.log('Initiating database record write to Firestore collection "hotline_feedback"...');
    docRef = await addDoc(collection(db, 'hotline_feedback'), payload);
    console.log(`🟢 FIRESTORE SUCCESS: Feedback document successfully written with ID: "${docRef.id}"`);
  } catch (dbErr: any) {
    console.error('🔴 FIRESTORE DATABASE FAILURE: Failed writing document to hotline_feedback collection:', dbErr);
    handleFirestoreError(dbErr, OperationType.CREATE, 'hotline_feedback');
  }

  // 4. Map user details to local formData structure
  const formData = {
    customerName: data.customerName,
    phoneNumber: data.phoneNumber,
    branch: data.branch,
    category: data.category,
    additionalDetails: data.description,
    photoUrl: imageUrl,
  };

  // 5. Isolate the Failure (Crucial) - FIRESTORE TRIGGER EMAIL BLOCKED SEPARATELY
  try {
    console.log('Initiating Trigger Email scheduling document to Firestore collection "mail"...');
    await addDoc(collection(db, "mail"), {
      to: ["jawdatghannam29@gmail.com"], // MUST be an array
      message: {
        subject: `New Cartel Feedback: ${formData.branch} - ${formData.category}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h2 style="background-color: #111; color: #fff; padding: 15px; text-align: center; border-radius: 4px; margin-top: 0;">Cartel Hotline Alert</h2>
            
            <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 20px;">
              <tr style="border-bottom: 1px solid #eee;">
                <th style="padding: 10px 0; color: #555;">Customer:</th>
                <td style="padding: 10px 0; font-weight: bold;">${formData.customerName || 'Anonymous'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <th style="padding: 10px 0; color: #555;">Phone:</th>
                <td style="padding: 10px 0;">${formData.phoneNumber || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <th style="padding: 10px 0; color: #555;">Branch:</th>
                <td style="padding: 10px 0;">${formData.branch}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <th style="padding: 10px 0; color: #555;">Category:</th>
                <td style="padding: 10px 0; color: #d9534f; font-weight: bold;">${formData.category}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #111;">
              <h4 style="margin: 0 0 10px 0; color: #333;">Feedback Details:</h4>
              <p style="margin: 0; line-height: 1.5; color: #444;">"${formData.additionalDetails || 'No details provided.'}"</p>
            </div>

            ${formData.photoUrl ? `
              <div style="margin-top: 20px; text-align: center;">
                <img src="${formData.photoUrl}" alt="Customer Upload" style="max-width: 100%; border-radius: 4px; border: 1px solid #ccc;"/>
              </div>
            ` : ''}
          </div>
        `
      }
    });
    console.log('🟢 TRIGGER EMAIL SUCCESS: Email document successfully added to Firestore "mail" queue.');
  } catch (mailErr: any) {
    console.error('🔴 TRIGGER EMAIL FAILURE: Failed writing to "mail" collection queue:', mailErr);
    handleFirestoreError(mailErr, OperationType.CREATE, 'mail');
  }

  return docRef.id;
}

// تعريف شكل البيانات (إذا كنت تستخدم TypeScript)
export interface Category {
  id: string;
  name: string;
  foodics_id: string;
  image_url: string;
  is_active: boolean;
}

export const fetchActiveCategories = async (): Promise<Category[]> => {
  try {
    // الإشارة إلى مجموعة "categories"
    const categoriesRef = collection(db, "categories");
    
    // استعلام لجلب الأقسام الفعالة فقط
    const q = query(categoriesRef, where("is_active", "==", true));
    
    const querySnapshot = await getDocs(q);
    const categoriesList: Category[] = [];
    
    querySnapshot.forEach((doc) => {
      categoriesList.push({
        id: doc.id, // سيجلب المعرف مثل "c-10"
        ...(doc.data() as Omit<Category, 'id'>)
      });
    });
    
    return categoriesList;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    return [];
  }
};
