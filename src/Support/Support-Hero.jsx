import React from "react";
import "./Support-Hero.css";
import heroBg from "../images/gradient-bg.webp"; // Update path if needed

const SupportHome = () => {
  return (
    <section
      className="hero-section d-flex align-items-left text-white text-left"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <p className="support-text">SUPPORT</p>
        <h1 className="display-5">How can we</h1>
        <h1 className="display-5 ">help you?</h1>
        <p className="lead1 text-left align-items-left">
          Get answers to all your Stark-related questions with <br />
          step-by-step guides from our Support center.
        </p>
      </div>
    </section>
  );
};

export default SupportHome;
