// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALFI1sTkMrXXr5jJOi1GF1MQmhzJaj5So",
  authDomain: "languagesproject-4e9c2.firebaseapp.com",
  projectId: "languagesproject-4e9c2",
  storageBucket: "languagesproject-4e9c2.appspot.com",
  messagingSenderId: "342479499016",
  appId: "1:342479499016:web:e81dd3e784041b4fe746bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';

// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyASq2Z190qUkCWxdf5Vdp0G0F8XyJQALwg",
//   authDomain: "languagesproject-8eefd.firebaseapp.com",
//   projectId: "languagesproject-8eefd",
//   storageBucket: "languagesproject-8eefd.appspot.com",
//   messagingSenderId: "501239163598",
//   appId: "1:501239163598:web:775ae63dc9e5346803be9f",
//   measurementId: "G-NKVR5J75E6"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
// const db = getFirestore(app);

// export {auth, db}

