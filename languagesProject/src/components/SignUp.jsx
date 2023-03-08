import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleRegister() {
        alert(`The user ${email} has registered`)
        const newUser = { email, password };
        setUsers([...users, newUser]);
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            Sign Up, please:

            <div>
                Enter your email:
                <input type="email" value={email} onChange={handleEmail} />
            </div>
            <div>
                Create a Password:
                <input type="password" value={password} onChange={handlePassword} />
            </div>
            <div>
                <button onClick={handleRegister} type="button"><b>REGISTER</b></button>
            </div>
            <button>
                <Link to="/Login"><b>GO TO LOGIN</b></Link>
            </button>
        </div>
    )
}