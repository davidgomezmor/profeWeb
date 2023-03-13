import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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

    navigate("/Home");

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
        <h2>REGISTER</h2>
        <form className="registerForm">
          <div>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div>
            <input
              type="text"
              placeholder="Apellido"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            </div>
            <div>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input
              type="password"
              placeholder="Contraseña"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </div>
          <div>
          <button className="login" type="submit" onClick={onSubmit}>
            Sign Up
          </button>
            <Link className="subtextLogin" to="/login/">
              {" "}
              Sign In{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}