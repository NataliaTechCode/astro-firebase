import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDm8BGH7HMmp5XkIohiuiKfgbWW0xWWlUc",
    authDomain: "redsocial-6085a.firebaseapp.com",
    projectId: "redsocial-6085a",
    storageBucket: "redsocial-6085a.appspot.com",
    messagingSenderId: "350152597704",
    appId: "1:350152597704:web:8a2b27bc7f8eddb95ec5fd"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
