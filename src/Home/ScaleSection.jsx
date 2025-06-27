import React, { useState } from "react";
import "./ScaleSection.css";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import defaultImage from "../images/1.webp";
import designersImage from "../images/2.webp";
import developersImage from "../images/3.webp";
import productImage from "../images/4.webp";
import complianceImage from "../images/3.webp";

const ScaleSection = () => {
  const [hoveredRole, setHoveredRole] = useState("default");

  const images = {
    default: defaultImage,
    designers: designersImage,
    developers: developersImage,
    product: productImage,
    compliance: complianceImage,
  };

  return (
    <section className="scale-section" aria-labelledby="headline-scale">
      {/* Background SVG and blob */}
      <div className="background-svg-wrapper">
        <svg
          viewBox="0 0 445 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="background-svg"
          aria-hidden="true"
        >
          <path
            d="M46.9335 338.378C30.213 326.986 16.571 311.079 8.5949 292.456C-9.37173 250.476 0.866772 195.191 41.9466 172.708C83.7279 149.84 135.827 142.321 169.401 106.081C195.151 78.2885 205.454 36.7387 236.894 15.6064C288.077 -18.8073 361.822 12.7332 400.592 51.8842C416.519 67.9692 428.511 88.7202 430.825 111.237C433.139 133.755 425.957 156.059 422.905 178.508C416.221 227.494 441.62 264.257 444.197 310.598C448.551 388.984 362.658 423.241 298.438 405C244.721 389.738 198.832 356.367 141.164 355.961C128.052 355.865 114.918 357.677 101.828 357.128C82.1499 356.057 63.154 349.568 46.9335 338.378Z"
            fill="#381FD1"
          />
        </svg>
        <img
          src="../images/maskimg.svg"
          alt=""
          role="presentation"
          className="background-blob"
          aria-hidden="true"
        />
      </div>

      <Container>
        <div className="scale-card">
          <Row className="align-items-start">
            {/* Left image */}
            <Col
              lg={6}
              className="d-none d-lg-block position-relative overflow-visible"
            >
              <img
                src={images[hoveredRole]}
                alt="Role Visual"
                className=" role-image  overflow-visible"
              />
            </Col>

            {/* Right content */}
            <Col lg={6}>
              <div className="text-side-wrapper">
                <p className="subtitle">
                  Streamlining workflows, consolidating tools
                </p>

                <h2 id="headline-scale" className="main-heading">
                  We scale with you <br />
                  <span className="highlight-yellow">across departments</span>
                </h2>

                <div
                  className="roles"
                  onMouseLeave={() => setHoveredRole("default")}
                >
                  <a
                    className="role-box"
                    onMouseEnter={() => setHoveredRole("designers")}
                  >
                    <h4 className="role-title">Designers</h4>
                    <p>
                      Create accessible designs in record time right in Figma,
                      Sketch, and Adobe XD.
                    </p>
                  </a>

                  <a
                    className="role-box"
                    onMouseEnter={() => setHoveredRole("developers")}
                  >
                    <h4 className="role-title">Developers</h4>
                    <p>
                      Test and audit your code from early implementation to live
                      product.
                    </p>
                  </a>

                  <a
                    className="role-box"
                    onMouseEnter={() => setHoveredRole("product")}
                  >
                    <h4 className="role-title">Product Managers</h4>
                    <p>
                      Manage accessibility in real-time across all your
                      projects.
                    </p>
                  </a>

                  <a
                    className="role-box highlight-box"
                    onMouseEnter={() => setHoveredRole("compliance")}
                  >
                    <h4 className="role-title">Compliance Managers</h4>
                    <p>
                      Monitor, manage and audit your accessibility posture in
                      one place.
                    </p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ScaleSection;
