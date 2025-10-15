import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard/home");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <Link to="/forgot-password">Forgot Password?</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Login;
