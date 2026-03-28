import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <div className="login-container">
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Enter your email" />
            <button>Reset Password</button>
            <Link to="/">Back to Login</Link>
        </div>
    );
}
