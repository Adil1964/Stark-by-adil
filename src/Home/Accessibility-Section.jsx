import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Accessibility-Section.css";

import chartImage1 from "../images/accessibility.webp";
import chartImage2 from "../images/accessibility-2.webp";
import chartImage3 from "../images/accessibility-1.png";

const AccessibilitySection = () => {
  const sections = [
    {
      imageSrc: chartImage1,
      heading: "Continuous Accessibility",
      subheading: "for your entire team",
      description:
        "Get real-time reports that help manage accessibility at scale without slowing down the velocity of your team. Stark gives your up-to-date insights into the accessibility of all your design files, code repositories and live sites or applications, all in one central place for efficient collaboration across departments.",
    },
    {
      imageSrc: chartImage2,
      heading: "Integrated into the tools ",
      subheading: "you already use",
      description:
        "Whether it's Figma or Sketch, your favorite web browser, or even GitHub and beyond, Stark integrates into the tools your team already uses for maximum efficiency and no learning curve. Our AI-powered integrations help your teammates find and fix accessibility issues as early as the first designs and all across the development cycle.",
    },
    {
      imageSrc: chartImage3,
      heading: "An enterprise-grade platform",
      subheading: "you can trust",
      description:
        "The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully GDPR / SOC2-certified platform to our zero-trust policy that underpins all our tool integrations, we ensure maximum security and privacy for our customers’ data and IP",
    },
  ];

  return (
    <>
      {sections.map((item, idx) => (
        <section key={idx} className="accessibility-section text-center py-5">
          <Container>
            <Row className="justify-content-center align-items-center mt-5">
              <Col md={10}>
                <img
                  src={item.imageSrc}
                  alt={`Chart ${idx + 1}`}
                  className="img-fluid mb-4 custom-image"
                />
              </Col>
              <Col md={10}>
                <h2 className="fw-bold display-5 heading-highlight mt-4">
                  <span className="highlight-bg">{item.heading}</span>
                  <br />
                  {item.subheading}
                </h2>
                <p className="text-muted mt-5 decription">{item.description}</p>
                <Button
                  variant="primary"
                  className="mt-4 px-4 py-2 custom-button"
                >
                  Start a free team trial
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </>
  );
};

export default AccessibilitySection;
