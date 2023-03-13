import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LogOut() {

    const navigate = useNavigate();
    const { firstName, surname, login, logOut, email, setEmail, password, setPassword, error, setError, currentUser, setCurrentUser } =
        useContext(AuthContext);
        
        

  const handleLogOut = async () => {
    await logOut();
    navigate("/Home");
    setCurrentUser(null)
    console.log(currentUser)
  };

  return (
    <button className="logout" onClick={handleLogOut}>
      Cerrar sesión
    </button>
  );
}
