import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import roiImage from "../images/ROI.png";
import leaderImage from "../images/Leader.png";
import loveUsImage from "../images/Love.png";
import g2Icon from "../images/badge.svg"; // bottom quote icon

import "./Award.css";

const AwardSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="award-section text-center py-5 mt-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={6} md={3} data-aos="fade-up">
            <img
              src={roiImage}
              alt="Best ROI"
              className="img-fluid award-badge"
            />
          </Col>
          <Col xs={6} md={3} data-aos="fade-up" data-aos-delay="200">
            <img
              src={leaderImage}
              alt="Momentum Leader"
              className="img-fluid award-badge"
            />
          </Col>
          <Col xs={6} md={3} data-aos="fade-up" data-aos-delay="400">
            <img
              src={loveUsImage}
              alt="Users Love Us"
              className="img-fluid award-badge"
            />
          </Col>
        </Row>

        <h2 className="fw-bold display-6">
          <span className="highlight-bg">Built to deliver business value,</span>
          <br />
          loved by the community.
        </h2>
        <p className="text-p mt-4 px-md-5 text-center">
          Stark is the only Continuous Accessibility platform that accelerates
          time-to-compliance from design and code to QA and PM, and helps
          companies of all sizes deliver highest quality experiences for all
          users.
        </p>

        <div className="g2-box mt-5 mx-auto d-inline-flex align-items-center px-4 py-3 border rounded last-box">
          <img src={g2Icon} alt="G2 Icon" className="me-3" width={50} />
          <span className="fw-bold custom-text">
            “Accessible design made easy.”
          </span>
        </div>
      </Container>
    </section>
  );
};

export default AwardSection;
