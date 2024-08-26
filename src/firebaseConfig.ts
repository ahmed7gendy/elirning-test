// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// أدخل تكوين Firebase هنا
const firebaseConfig = {
    apiKey: "AIzaSyA2sikiw2_wYZ0jE5v62dj021Gu33b78eM",
    authDomain: "new-e-learning-edecs.firebaseapp.com",
    databaseURL: "https://new-e-learning-edecs-default-rtdb.firebaseio.com",
    projectId: "new-e-learning-edecs",
    storageBucket: "new-e-learning-edecs.appspot.com",
    messagingSenderId: "82033132236",
    appId: "1:82033132236:web:30aa4a6ef16e8251077869",
    measurementId: "G-CEZJRLPSW9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
