import React from "react";
import "./Trial.css";
import logo from "../images/CardLogo.svg"; // Replace with actual path

const TrialPage = () => {
  return (
    <div className="trial-bg d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side */}
          <div className="col-md-6 mb-5 mb-md-0">
            <p className="step-text fw-bold text-uppercase mb-2">
              Step <span>1</span> of <span>3</span>
            </p>
            <h1 className="mb-4 heading1">
              Let’s start your <br />
              free trial
            </h1>
            <ul className="list-unstyled fs-5">
              <li className="d-flex align-items-start mb-3">
                <span className="check-icon me-2">✔️</span>
                Get full access to Stark’s Launch Plan for 14 days free.
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="check-icon me-2">✔️</span>
                Add as many team members as you need.
              </li>
              <li className="d-flex align-items-start">
                <span className="check-icon me-2">✔️</span>
                We won’t charge your credit card, you can cancel any time.
              </li>
            </ul>
          </div>

          {/* Right Side (Card) */}
          <div className="col-md-5">
            <div className="login-card p-4 shadow-sm">
              <div className="text-center mb-3">
                <img src={logo} alt="Logo" className="login-logo mb-2" />
                <p className="fw-semibold m-0">
                  Create a free Stark account or <br />
                  sign in with your credentials.
                </p>
              </div>

              <hr />

              <button className="btn google-btn w-100 mb-3 d-flex align-items-center justify-content-center gap-2">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  width="18"
                />
                Continue with Google
              </button>

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
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialPage;
