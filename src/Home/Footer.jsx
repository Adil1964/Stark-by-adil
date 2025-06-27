import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Assuming you have a CSS file for styling
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import slack from "../images/slack.png"; // Adjust the path as necessary
import linkedin from "../images/linkedin.webp";
import youtube from "../images/youtube.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        {/* FIRST ROW – 4 blocks evenly spaced */}
        <Row className="mb-4 gx-1">
          <Col md={3}>
            <h6>Use Cases</h6>
            <p>For Designers</p>
            <p>For Developers</p>
            <p>For Product Managers</p>
            <p>For Compliance Managers</p>
          </Col>
          <Col md={3}>
            <h6>Resources</h6>
            <p>Blog</p>
            <p>Library</p>
            <p>Release Notes</p>
            <p>Slack Community</p>
            <p>WCAG Compliance</p>
            <p>Section 508 Compliance</p>
            <p>European Accessibility Act (EAA) Compliance</p>
          </Col>
          <Col md={3}>
            <h6>Help</h6>
            <p>My Account</p>
            <p>Support Docs</p>
            <p>Contact Us</p>
            <p>Feature Requests</p>
          </Col>
          <Col md={3}>
            <h6>Company</h6>
            <p>Stark Framework</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Code of Conduct</p>
          </Col>
        </Row>

        {/* SECOND ROW – match block width and align */}
        <Row className="mb-4 gx-1">
          <Col md={3}>
            <h6>Security</h6>
            <p>Security Overview</p>
            <p>Cookie Policy</p>
            <p>AI Overview</p>
            <p>GDPR</p>
            <p>Status</p>
          </Col>
          <Col md={3}>
            <h6>Design Integrations</h6>
            <p>Stark for Figma</p>
            <p>Stark for FigJam</p>
            <p>Stark for Sketch</p>
            <p>Stark for Adobe XD</p>
          </Col>
          <Col md={3}>
            <h6>Developer Integrations</h6>
            <p>Stark for Chrome</p>
            <p>Stark for Firefox</p>
            <p>Stark for Edge</p>
            <p>Stark for Safari</p>
            <p>Stark for Arc</p>
            <p>Stark for Brave</p>
          </Col>
        </Row>

        {/* Social Icons */}
        <div className="d-flex justify-content-between align-items-center flex-wrap g-1 my-4 icons-section">
          {/* Left: Copyright text */}

          {/* Right: Social Icons */}
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" width="30" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" width="30" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src={slack} alt="GitHub" width="30" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" width="30" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} alt="YouTube" width="30" />
            </a>
          </div>
          <div className="text-warning fw-bold small mb-0">
            MADE WITH LOVE BY MUHAMMAD ADIL , INC. COPYRIGHT 2025
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
