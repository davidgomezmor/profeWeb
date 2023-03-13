import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "../../components/Calendar";
import { LogOut } from "../publicPages/logOut";


export const HomeUser = () => {
    const navigate = useNavigate();
    const { firstName, surname, login, email, setEmail, password, setPassword, error, setError, currentUser, setCurrentUser } =
        useContext(AuthContext);
    console.log(currentUser)

    const [date, setDate] = useState()


    return (
        <div>
            You are logged in
            <br />
            <div>
                <h3>Choose Date and time for next class:</h3>
                <Calendar />
            </div>
            <div>
                <LogOut />
            </div>
        </div>

    )
}