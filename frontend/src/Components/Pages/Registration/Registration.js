import React from 'react';
import './Registration.css';
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="registration-card shadow-lg p-4 rounded">
        {/* Title */}
        <h2 className="text-center mb-4">Create Your Account</h2>

        {/* Registration Form */}
        <form>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Address */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#terms">Terms & Conditions</a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Social Signup */}
        <button className="btn btn-outline-dark w-100 mb-2">
          <i className="bi bi-google me-2"></i> Sign up with Google
        </button>
        <button className="btn btn-outline-primary w-100">
          <i className="bi bi-facebook me-2"></i> Sign up with Facebook
        </button>

        {/* Login Link */}
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>

      </div>
    </div>
  );
};

export default Registration;



