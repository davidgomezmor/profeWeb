import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

/////////////////////////////////////////////

// import { createContext, useEffect, useState } from "react";

// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { setDoc, doc, connectFirestoreEmulator } from "firebase/firestore";
// import { auth, db } from "../config/firebase";


// export const context = createContext();

// export const AuthProvider = ({ children }) => {
  
//   const [firstName, setFirstName] = useState(" ");
//   const [lastName, setLastName] = useState(" ");
//   const [email, setEmail] = useState(" ");
//   const [password, setPassword] = useState(" ");
//   const [currentUser, setCurrentUser] = useState();
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//  async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       updateProfile(auth.currentUser, {
//         displayName: firstName,
//       });
//       const user = userCredential.user;
//       sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);
//       await setDoc(doc(db, "users", user.uid), {
//         email,
//         firstName,
//         userTaskList: [],
//         userTracking: [],
//         userPhases: [],

//       });
//       return true;
//     } catch (error) {}
//   }};