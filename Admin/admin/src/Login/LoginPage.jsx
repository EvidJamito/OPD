import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Input } from "./login_components/Input";
import styles from "./login_components/LoginPage.module.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRememberPasswordChange = (e) => {
    setRememberPassword(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic here
    if (email && password) {
      console.log("Logging in with", email, password, rememberPassword);

      // Navigate to the dashboard after successful login
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className={styles.mainBackground}>
      <div className={styles.contentWrapper}>
        <img
          loading="lazy"
          src="/bg.svg"
          className={styles.backgroundImage}
          alt="Background"
        />
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Login to Account</h1>
          <p className={styles.subtitle}>
            Please enter your email and password to continue
          </p>

          <Input
            label="Email address:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ariaLabel="Email address"
          />

          <div className={styles.passwordHeader}>
            <span>Password</span>
            <button type="button" className={styles.forgotPassword}>
              Forgot Password?
            </button>
          </div>

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ariaLabel="Password"
          />

          <div className={styles.rememberPassword}>
            <input
              type="checkbox"
              checked={rememberPassword}
              onChange={handleRememberPasswordChange}
              id="rememberPassword"
            />
            <label htmlFor="rememberPassword">Remember Password</label>
          </div>

          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>

          <div className={styles.createAccount}>
            <span>Don't have an account?</span>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className={styles.createAccountLink}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
