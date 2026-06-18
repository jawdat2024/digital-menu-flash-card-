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

    // 3. Structure the professional HTML layout matching luxury aesthetic
    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e4; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <!-- Header banner matching luxury aesthetic -->
        <div style="background-color: #1a1a1a; padding: 25px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Hotline Feedback Alert</h2>
        </div>
        
        <!-- Main content area -->
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #333333; margin-top: 0;">A new customer feedback submission has been recorded. Details are below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #666666; width: 35%;">Customer Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111;">${data.customerName || 'Anonymous'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #666666;">Phone Number:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111;">
                <a href="tel:${data.phoneNumber}" style="color: #4A90E2; text-decoration: none;">${data.phoneNumber || 'Not Provided'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #666666;">Branch Location:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: bold;">${data.branch}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #666666;">Feedback Category:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111;">
                <span style="background-color: #f0f0f0; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: 500;">${data.category}</span>
              </td>
            </tr>
          </table>

          <!-- Additional Comments Box -->
          <div style="margin-top: 25px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #1a1a1a; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #333333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Customer Comments:</h4>
            <p style="margin: 0; color: #555555; line-height: 1.6; font-size: 15px; font-style: italic;">"${data.description || 'No additional details provided.'}"</p>
          </div>

          <!-- Conditional Photo Attachment Link -->
          ${imageUrl ? `
          <div style="margin-top: 25px; text-align: center;">
            <a href="${imageUrl}" target="_blank" style="display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 12px 25px; text-decoration: none; font-size: 14px; font-weight: bold; border-radius: 4px; letter-spacing: 1px; text-transform: uppercase;">View Uploaded Photo</a>
          </div>
          ` : ''}
        </div>

        <!-- Footer -->
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #eeeeee;">
          <p style="margin: 0; font-size: 12px; color: #999999;">Automated notification via Firebase Hotline System.</p>
        </div>
      </div>
    `;

    // 4. Add the document to the collection the extension listens to
    await addDoc(collection(db, 'mail'), {
      to: ['jawdatghannam29@gmail.com'],
      message: {
        subject: `🚨 Hotline Feedback [${data.branch}] - ${data.category}`,
        html: emailHtml,
      }
    });

    console.log("Feedback logged and email scheduled successfully!");
    return docRef.id;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
}
