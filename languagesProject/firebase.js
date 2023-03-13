import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASq2Z190qUkCWxdf5Vdp0G0F8XyJQALwg",
  authDomain: "languagesproject-8eefd.firebaseapp.com",
  projectId: "languagesproject-8eefd",
  storageBucket: "languagesproject-8eefd.appspot.com",
  messagingSenderId: "501239163598",
  appId: "1:501239163598:web:775ae63dc9e5346803be9f",
  measurementId: "G-NKVR5J75E6"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }

