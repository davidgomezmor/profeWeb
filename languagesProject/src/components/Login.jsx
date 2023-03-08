import { Link } from "react-router-dom"
import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false)

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        const user = users.find((usuari) =>
            usuari.email === email && usuari.password === password);
        if (user) {
            setMessage(`Welcome ${email}! You are logged.`);
            setPassword(``)
            setEmail(``)
            setIsLogged(true)
        } else {
            setMessage("Invalid username or password");
            setIsLogged(false)
        }
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    return (
        <div>
            <div>
                Enter your email:
                <input type="email" value={email} onChange={handleEmail} />
            </div>
            <div>
                Enter your Password:
                <input type="password" value={password} onChange={handlePassword} />
            </div>
            <button onClick={handleLogin} type="button"><b>LOGIN</b></button>
            {isLogged &&
                
                <button><b><Link to="/User">User</Link></b></button>}
            <div>
                {message}
            </div>
        </div>
    )
}