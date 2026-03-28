import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="login-container">
      <h2>Register</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <Link to="/">Back to Login</Link>
    </div>
  );
}
