import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDocs } from 'firebase/firestore';

// Firebase configuration - Get these from Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp?: any;
}

// Send contact form to Firestore
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const contactRef = collection(db, 'contact_messages');
    const docRef = await addDoc(contactRef, {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

// Retrieve contact messages (for admin dashboard later)
export const getContactMessages = async () => {
  try {
    const q = query(collection(db, 'contact_messages'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};