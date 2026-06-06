/// <reference types="vite/client" />
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
      if (imageFile.size > 10 * 1024 * 1024) {
        alert('Image is too large. Please upload an image under 10MB.');
        throw new Error('Image too large');
      }

      const sanitizedName = imageFile.name.replace(/[^a-zA-Z0-9.]/g, '_');
      const storagePath = `feedback_uploads/${Date.now()}_${sanitizedName}`;
      const storageRef = ref(storage, storagePath);
      
      const metadata = {
        contentType: imageFile.type || 'image/jpeg',
      };

      console.log('--- Upload Debug Info ---');
      console.log(`Path: ${storagePath}`);
      console.log(`Size (bytes): ${imageFile.size}`);
      console.log(`Content Type: ${metadata.contentType}`);
      console.log('-------------------------');

      const snapshot = await uploadBytes(storageRef, imageFile, metadata);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    // 2. Save complete payload to Firestore
    const payload = {
      category: data.category,
      details: data.description,
      customerName: data.customerName,
      phoneNumber: data.phoneNumber,
      branch: data.branch,
      imageUrl: imageUrl || null,
      submittedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'hotline_feedback'), payload);

    // 3. Send email notification using EmailJS (Lightweight Serverless Alternative)
    // We use fetch to call the EmailJS REST API safely from the frontend.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            category: data.category,
            description: data.description,
            customer_name: data.customerName,
            phone_number: data.phoneNumber,
            branch: data.branch,
            image_url: imageUrl || 'No image provided'
          }
        })
      });
    } else {
      // Fallback zero-config alternative using FormSubmit to specific email
      // This sends a cleanly formatted email array of data
      await fetch("https://formsubmit.co/ajax/JAWDATGHANNAM29@GMAIL.COM", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Hot Line Feedback: ${data.category} - ${data.branch}`,
          _template: 'box',
          Category: data.category,
          Customer_Name: data.customerName,
          Phone_Number: data.phoneNumber,
          Branch: data.branch,
          Description: data.description,
          Image_Attachment: imageUrl || 'No image uploaded'
        })
      });
    }

    return docRef.id;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
}
