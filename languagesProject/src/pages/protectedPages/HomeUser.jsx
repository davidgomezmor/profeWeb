import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MyCalendar } from "../../components/Calendar";
import { LogOut } from "../publicPages/logOut";
import Navbar from "../../components/Navbar";


export const HomeUser = () => {
    const navigate = useNavigate();
    const { firstName, surname, login, email, setEmail, password, setPassword, error, setError, currentUser, setCurrentUser } =
        useContext(AuthContext);
    console.log(currentUser)

    const [date, setDate] = useState()


    return (
        <>
        <Navbar/>
        <div>
            You are logged in
            <br />
            <div>
                <h3>Choose Date and time for next class:</h3>
                <MyCalendar />
            </div>
            <div>
                <LogOut />
            </div>
        </div>
</>
    )
}