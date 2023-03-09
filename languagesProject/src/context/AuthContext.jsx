import { createContext, useEffect, useState } from "react";

// IMPORTS DE FIREBASE
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { setDoc, doc, connectFirestoreEmulator } from "firebase/firestore";
import { auth, db } from "../../firebase"

// CREO EL CONTEXT I EL PROVIDER

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // ESTATS
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // REGISTER
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: firstName,
      });
      const user = userCredential.user;
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);
      await setDoc(doc(db, "users", user.uid), {
        email,
        firstName,
        userTaskList: [],
        userTracking: [],
        userPhases: [],
        //* Aquí posar les coses que s'han de guardar a la base de dades (de cada user)
      });
      return true;
    } catch (error) {}
  };

  // LOGIN
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);

      return true;
    } catch (error) {
      console.log(error.message);
    }
  };

  // RESETPASSWORD
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // SIGNOUT
  const logOut = async () => {
    try {
      await signOut(auth);
      /*  navigate('/Welcome'); // Quan tanquis sessió ves a Welcome */
      return true;
    } catch (error) {
      return false;
    }
  };
  // COMPROVA SI L'USER ESTÀ LOGUEJAT
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        password,
        setPassword,
        error,
        setError,
        message,
        setMessage,
        signup,
        login,
        resetPassword,
        logOut,
 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";
// import { useNavigate } from "react-router-dom";

// import Footer from "../../components/Footer";
// import register from "../../assets/register.png";

// function Register() {
//   const navigate = useNavigate();
//   const {
//     email,
//     setEmail,
//     firstName,
//     setFirstName,
//     lastName,
//     setLastName,
//     password,
//     setPassword,
//     error,
//     setError,
//     signup,
//   } = useContext(AuthContext);

//   // CREACIÓ D'UN NOU USER & VALIDACIÓ / ERROR
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await signup(email, password);

//     navigate("/welcome");

//     if (error) {
//       console.log(error);
//     }
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <>
//       <div className="register">
//         <h1>¡HOLA!</h1>
//         <form className="registerForm">
//           <div>
//             <input
//               type="text"
//               placeholder="Nombre"
//               required
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Apellido"
//               required
//               onChange={(e) => setLastName(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Contraseña"
//               required
//               minLength="6"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button className="login" type="submit" onClick={onSubmit}>
//             REGÍSTRATE
//           </button>
//           <div>
//             <Link className="subtextLogin" to="/login/">
//               {" "}
//               O INICIA SESIÓN{" "}
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Register;




// import React, { createContext, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { setDoc, doc, connectFirestoreEmulator } from "firebase/firestore";
// import { auth, db } from "../../firebase"

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => 
// {
//   const [firstName, setFirstName] = useState(" ");
//   const [surname, setSurname] = useState(" ");
//   const [email, setEmail] = useState(" ");
//   const [password, setPassword] = useState(" ");
//   const [users, setUsers] = useState([]);

//   const register = async (email, password) => {
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
//   };

//   return (
//     <AuthContext.Provider value={{ firstName, setFirstName, surname, setSurname, 
//     email, setEmail, password, setPassword, users, setUsers, register }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
// ////////////////////////////////////////

// // import { createContext, useEffect, useState } from "react";




// // export const context = createContext();

// // export const AuthProvider = ({ children }) => {
  
// //   const [firstName, setFirstName] = useState(" ");
// //   const [lastName, setLastName] = useState(" ");
// //   const [email, setEmail] = useState(" ");
// //   const [password, setPassword] = useState(" ");
// //   const [currentUser, setCurrentUser] = useState();
// //   const [error, setError] = useState("");
// //   const [message, setMessage] = useState("");

 