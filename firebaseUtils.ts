import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Initialize Firebase only if it hasn't been initialized yet
const firebaseConfig = {
  // Replace with your actual Firebase config
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

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
  try {
    let imageUrl = '';

    // 1. Upload photo to Firebase Storage if provided
    if (imageFile) {
      const storageRef = ref(storage, `feedback_images/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    // 2. Save complete payload to Firestore
    const payload: FeedbackPayload = {
      ...data,
      ...(imageUrl ? { imageUrl } : {}),
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'customer_feedback'), payload);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
}
