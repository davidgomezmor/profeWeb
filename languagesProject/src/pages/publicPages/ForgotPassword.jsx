import React, { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";


export const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword, error, setError, message, setMessage } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");

      await resetPassword(emailRef.current.value);
      setMessage("Sigue las instrucciones en tu email");
    } catch (error) {
      setError("Fallo al cambiar la contraseña");
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <h3>REESTABLECER CONTRASEÑA</h3>
        <div>
        </div>
        {error && (
          <>
            <div>
              <div role="alert">
                <div>
                  {error}
                </div>
              </div>
            </div>
          </>
        )}
        {message && (
          <>
            <div>
              <div role="alert">
                <div>
                  {message}
                </div>
              </div>
            </div>
          </>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <p>Introduce tu email para cambiar la contraseña</p>
              <input
                className="btn btn-primary rounded-full mt-3 mb-3 normal-case"
                id="email"
                name="email"
                type="email"
                placeholder="Introduce tu email"
                ref={emailRef}
                required
              />
            </label>
            <button className="btn btn-primary rounded-full mt-3">
              <span>ENVIAR EMAIL</span>
            </button>

            <p className="subtextLogin m-3">
              {" "}
              ¿Necesitas una cuenta? <Link to="/register">Regístrate</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
