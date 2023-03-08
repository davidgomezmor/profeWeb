import React from "react";
import { Link } from "react-router-dom";


export function Home() {

    return (
        <div>
            <h1>Welcome to Language App</h1>
            <div>
                Welcome to the website
            </div>
            <div>
                <div>
                    <Link to="/Home">go to Home</Link>
                </div>
                <div>
                    <Link to="/Courses">go to Courses</Link>
                </div>
                <div>
                    <Link to="/About">go to About</Link>
                </div>
                <div>
                    <Link to="/Login">go to Login</Link>
                </div>
                <div>
                    <Link to="/SignUp">go to SignUp</Link>
                </div>

            </div>
        </div>
    );
} 