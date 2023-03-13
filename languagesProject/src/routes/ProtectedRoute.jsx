import {  Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react'



export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser !== null ? children : <Navigate to="/Login" />;
}

