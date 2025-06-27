import React from "react";
import "./Logos.css"; // Make sure this file exists
import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import logo3 from "../images/logo3.svg";
import logo4 from "../images/logo4.svg";
import logo5 from "../images/logo5.svg";
import logo6 from "../images/logo6.svg";
import logo7 from "../images/logo7.svg";
import logo8 from "../images/logo8.svg";
import logo9 from "../images/logo9.svg";
import logo10 from "../images/logo10.svg";
import logo11 from "../images/logo11.svg";

const LogoMarquee = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];

  return (
    <section className="logo-marquee-wrapper text-center py-5">
      <div className="container text-container d-flex justify-content-center align-items-center">
        <h2>
          Speed up your accessibility workflow
          <span className="highlight-text"> from months to minutes </span>
        </h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <p className="text-center para-container">
          Designers, developers, product managers, and accessibility experts at
          50,000+ companies use Stark’s suite of integrated accessibility tools
          in their daily product development cycle. Join them today!
        </p>
      </div>

      <div className="marquee-container overflow-hidden">
        <div className="marquee-track d-flex">
          {[...logos, ...logos].map((logo, index) => (
            <div className="marquee-item px-5" key={index}>
              <img src={logo} alt={`logo-${index}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
