import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export function Register() {
  const navigate = useNavigate();
  const {
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
    signup,
  } = useContext(AuthContext);

  // CREACIÓ D'UN NOU USER & VALIDACIÓ / ERROR
  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);

    navigate("/welcome");

    if (error) {
      console.log(error);
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="register">
        <h1>¡HOLA!</h1>
        <form className="registerForm">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellido"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login" type="submit" onClick={onSubmit}>
            REGÍSTRATE
          </button>
          <div>
            <Link className="subtextLogin" to="/login/">
              {" "}
              O INICIA SESIÓN{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export const Register = () => {
//     const {
//         firstName, setFirstName, surname, setSurname, email, setEmail, password, setPassword, users, setUsers, register
//     } = useContext(AuthContext)

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         await signup(email, password);

//         if (error) {
//             console.log(error);
//         }
//         setFirstName("");
//         setSurname("");
//         setEmail("");
//         setPassword("");
//     };


//     function handleName(event) {
//         setName(event.target.value);
//     }

//     function handleSurname(event) {
//         setSurname(event.target.value);
//     }

//     function handleEmail(event) {
//         setEmail(event.target.value);
//     }

//     function handlePassword(event) {
//         setPassword(event.target.value);
//     }

//     function handleRegister() {
//         alert(`The user ${email} has registered`)
//         const newUser = { email, password, firstName, surname };
//         setUsers([...users, newUser]);
//         localStorage.setItem("users", JSON.stringify([...users, newUser]));
//         setEmail("");
//         setPassword("");
//     }

//     return (

//         <div>
//             <b>Sign Up, please:</b>

//             <div>
//                 <input
//                     type="text"
//                     placeholder="Nombre"
//                     required
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Apellido"
//                     required
//                     onChange={(e) => setSurname(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Contraseña"
//                     required
//                     minLength="6"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button type="submit" onClick={onSubmit}>
//                 REGÍSTRATE
//             </button>
//             <div>
//                 <Link to="/login/">
//                     {" "}
//                     O INICIA SESIÓN{" "}
//                 </Link>
//             </div>
//         </div>
//     )
// }