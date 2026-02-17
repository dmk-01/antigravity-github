import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBfbfrucqZosEJZQoNeC84y-0Uqda_5Gbg",
    authDomain: "planters-promise-2026.firebaseapp.com",
    projectId: "planters-promise-2026",
    storageBucket: "planters-promise-2026.firebasestorage.app",
    messagingSenderId: "112498817133",
    appId: "1:112498817133:web:1820b4d7f058755452e764"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
