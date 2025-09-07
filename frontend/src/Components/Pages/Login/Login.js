import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="login-card shadow-lg p-4 rounded">
        {/* Title */}
        <h2 className="text-center mb-4">AI Physio Login</h2>

        {/* Login Form */}
        <form>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <a href="#forgot" className="forgot-link">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Social Login */}
        <button className="btn btn-outline-dark w-100 mb-2">
          <i className="bi bi-google me-2"></i> Login with Google
        </button>
        <button className="btn btn-outline-primary w-100">
          <i className="bi bi-facebook me-2"></i> Login with Facebook
        </button>

        {/* Sign Up Link */}
        <p className="text-center mt-3 signup-text">
          Don’t have an account? <a href="#signup">Sign Up</a>
        </p>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;