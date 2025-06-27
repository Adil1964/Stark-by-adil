import React from "react";
import "./Login.css";
import logo from "../images/CardLogo.svg"; // Replace with your actual logo path

const LoginPage = () => {
  return (
    <div className="login-bg d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="login-logo mb-3" />
          <p className="fw-semibold m-0">
            Create a free Stark account or sign in
          </p>
          <p className="m-0 fw-semibold">with your credentials.</p>
        </div>

        <hr />

        <button className="btn google-button w-100 mb-3 d-flex align-items-center justify-content-center gap-2">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            width="18"
          />
          Continue with Google
        </button>

        <button className="btn btn-purple w-100 mb-3">Continue with SSO</button>

        <hr />

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label small mb-1">
            Business Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your work email"
          />
        </div>

        <button className="btn btn-outline-dark w-100">Continue</button>

        <div className="text-center mt-3 small">
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
