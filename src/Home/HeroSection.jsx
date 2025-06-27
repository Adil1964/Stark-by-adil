import React from "react";
import "./Hero.css";
import Gradientimage from "../images/bgmain.png";
import Heroimage from "../images/heroimg.webp";

const HeroSection = () => {
  return (
    <section
      className="custom-class text-white position-relative overflow-hidden hero-wrapper py-2"
      style={{
        height: "126vh",
      }}
    >
      {/* Gradient Overlay Image */}
      <img
        src={Gradientimage}
        alt="Gradient Overlay"
        className="gradient-overlay"
      />

      {/* Content */}
      <div className="container text-center position-relative z-2 text-container py-5">
        <h1 className="display-4 fw-bold">
          Digital accessibility <br />
          <span>compliance on</span> <br />
          <span>autopilot</span>
        </h1>
        <p className="mt-4 fs-5 mx-auto" style={{ maxWidth: "700px" }}>
          The platform 50,000 companies trust as their accessibility
          infrastructure across the entire software product lifecycle — from
          issue detection and remediation, to insights and governance.
        </p>
        <button className="btn btn-warning text-dark fw-semibold mt-4 px-4 py-2">
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
