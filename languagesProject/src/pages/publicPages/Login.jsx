import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { LogOut } from "./logOut";

export const Login = () => {
  const navigate = useNavigate();
  const { login, logOut, email, setEmail, password, setPassword, error, setError } =
    useContext(AuthContext);

  // AUTENTIFICACIÓ / ERROR AL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid email or password");
      // return <Navigate to="/Home"/> 
    }
    console.log(error);

    setEmail("");
    setPassword("");

    navigate("/HomeUser");

  };
  return (
    <>
      <div className="loginWindow">
        <h2>LOGIN</h2>

        <form>
          <div>
          <div>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="email"
              placeholder="Introduce tu email"
              autoComplete="on"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="password"
              placeholder="Contraseña"
              minLength="6"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div>
              <Link className="forgotPass" type="link" to="/ForgotPassword">
                {" "}
                ¿Has olvidado tu contraseña?{" "}
              </Link>
            </div>
          </div>
          <br />
          <button className="login" type="submit" onClick={handleLogin}>
            Access
          </button>
          <div>
            <Link className="subtextLogin" type="link" to="/register/">
              {" "}
              Create Account{" "}
            </Link>
          </div>
          <br /><br />
          <div>
            <LogOut />
          </div>
        </form>
      </div>
    </>
  );
};