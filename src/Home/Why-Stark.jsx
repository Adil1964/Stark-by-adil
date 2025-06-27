import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Why-Stark.css"; // Assuming you have a CSS file for styles
import icon1 from "../images/paper.png"; // Replace with actual icon paths
import icon2 from "../images/Rocket.png"; // Replace with actual icon paths
import icon3 from "../images/download.png"; // Replace with actual icon paths
import icon4 from "../images/settings.png"; // Replace with actual icon paths

const WhyStark = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: icon2,
      title: "Increase Velocity",
      desc: "Stark is the only end-to-end platform that helps your team find and fix accessibility issues from design and code to the live product. All this, while being up to 10x faster than any other tool in the market.",
    },
    {
      icon: icon1,
      title: "Accelerate Compliance",
      desc: "Reports and Insights are available in real-time for every project in Stark. Plus, time-stamped historic reports are available at any time for up-to-date compliance reporting across departments.",
    },
    {
      icon: icon3,
      title: "Reduce Cost",
      desc: "Stark’s fully integrated solution enables fixing of accessibility issues as early as first design drafts, reducing 56% of issues that typically make it into code where remediation costs can be up 100x higher.",
    },
    {
      icon: icon4,
      title: "Mitigate Risk",
      desc: "The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully SOC2-certified platform stack to our zero-trust policy that underpins all our tool.",
    },
  ];

  return (
    <div className=" main-container">
      <Container>
        <h6 className="text-center text-primary why-stark-subheading ">
          WHY STARK?
        </h6>
        <h2 className="text-center why-stark-heading">
          Build and ship inclusive software,
          <br />
          accelerate time-to-compliance.
        </h2>

        <Row>
          {features.map((feature, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="mb-4"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyStark;
