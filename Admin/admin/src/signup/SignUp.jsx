import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { InputS as Input } from "./signup_components/InputS";
import styles from "./signup_components/SignUp.module.css";

export const SignUp = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.mainBackground}>
        <div className={styles.contentWrapper}>
          <img
            loading="lazy"
            src="/bg.svg"            
            className={styles.backgroundImage}
            alt=""
          />
          <form className={styles.formCard}>
            <h1 className={styles.title}>Create an Account</h1>
            <p className={styles.subtitle}>Create an account to continue</p>
            
            <Input 
              label="Email address:"
              type="email"
              value="esteban_schiller@gmail.com"
              placeholder="Enter your email"
            />
            
            <Input 
              label="Username"
              value="Username"
              placeholder="Enter username"
            />
            
            <div className={styles.passwordHeader}>
              <span>Password</span>
              <button type="button" className={styles.forgotPassword}>
                Forget Password?
              </button>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Sign Up
            </button>
            
            <div className={styles.loginPrompt}>
              <span className={styles.loginText}>
                Already have an account?
              </span>
              {/* Use Link to navigate to the LoginPage */}
              <Link to="/" className={styles.loginLink}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
