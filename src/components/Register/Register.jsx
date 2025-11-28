import React, { useState } from "react";
import "./Register.css";

const Register = ({ setUser, setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // default role

  const handleRegister = () => {
    const newUser = { email, role };
    setUser(newUser);

    if (role === "admin") {
      setPage("admin-dashboard");
    } else {
      setPage("user-dashboard");
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <div className="role-selection">
        <label className="role-label">
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === "user"}
            onChange={(e) => setRole(e.target.value)}
          />
          User
        </label>
        <label className="role-label">
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === "admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          Admin
        </label>
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
