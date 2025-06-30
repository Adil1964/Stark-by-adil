import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../images/logo.png";
import resources from "../images/resources.png"; // Adjust the path as necessary
import usecases from "../images/usecases.webp";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [showUseCases, setShowUseCases] = useState(false);

  const resourcesTimer = useRef(null);
  const useCasesTimer = useRef(null);

  const handleResourcesEnter = () => {
    clearTimeout(resourcesTimer.current);
    setShowResources(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimer.current = setTimeout(() => setShowResources(false), 150);
  };

  const handleUseCasesEnter = () => {
    clearTimeout(useCasesTimer.current);
    setShowUseCases(true);
  };

  const handleUseCasesLeave = () => {
    useCasesTimer.current = setTimeout(() => setShowUseCases(false), 150);
  };

  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar py-4">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="Logo" className="me-2" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* Left Menu */}
          <Nav className="me-auto fw-bold text-uppercase ml-4">
            {/* Use Cases - Custom Hover Dropdown */}
            <div
              className="nav-item dropdown-hover"
              onMouseEnter={handleUseCasesEnter}
              onMouseLeave={handleUseCasesLeave}
            >
              <Nav.Link
                as={NavLink}
                to="/"
                className="use-cases-btn dropdown-toggle"
              >
                Use Cases
              </Nav.Link>

              {showUseCases && (
                <div class="usecase-dropdown-container">
                  <div class="usecase-text-section">
                    <div className="hover-effect">
                      <strong>
                        <Link to="#">Design Teams </Link>
                      </strong>

                      <p>
                        Create accessible designs in record time right in Figma
                        & Sketch.
                      </p>
                    </div>
                    <div className="hover-effect">
                      <strong>
                        <Link to="https://www.google.com">Engineering</Link>
                      </strong>

                      <p>
                        Test and audit your code from early implementation to
                        live product.
                      </p>
                    </div>
                    <div className="hover-effect">
                      <strong>
                        <Link to="#">Compliance </Link>
                      </strong>

                      <p>
                        Manage accessibility in real-time across all your
                        projects.
                      </p>
                    </div>
                    <div className="hover-effect">
                      <strong>
                        <Link to="#">Product Managers</Link>
                      </strong>

                      <p>
                        Monitor, manage and audit your accessibility posture in
                        one place.
                      </p>
                    </div>
                  </div>

                  <div class="usecase-image-section">
                    <img src={usecases} alt="Use Cases" />
                    <h6>Read our new white paper</h6>
                    <p>
                      Explore how Stark helps teams ship accessible products
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Nav.Link as={NavLink} to="/pricing/">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/support/">
              Support
            </Nav.Link>

            {/* Resources - Custom Hover Dropdown */}
            <div
              className="nav-item dropdown-hover"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <Nav.Link className="resources-btn dropdown-toggle">
                Resources
              </Nav.Link>

              {showResources && (
                <div className="resources-dropdown">
                  <div className="dropdown-left-wrapper">
                    <div className="dropdown-left shadow-sm">
                      <img
                        src={resources}
                        alt="EAA"
                        className="dropdown-image"
                      />
                      <div className="dropdown-content p-3">
                        <p className="dropdown-title mb-2">
                          Introducing the EAA framework in your Stark Compliance
                          Center
                        </p>
                        <Link to="#" className="dropdown-link">
                          Read more on the blog
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-right grid-3-col">
                    <div className="resource-box">
                      <strong className="resource-title">
                        <Link to="#">Blog</Link>
                      </strong>
                      <p className="resource-desc">
                        Read about the latest updates to Stark and articles from
                        our team.
                      </p>
                    </div>
                    <div className="resource-box">
                      <strong className="resource-title">
                        <Link to="#">Library</Link>
                      </strong>
                      <p className="resource-desc">
                        Learn about all things accessibility and inclusive
                        design.
                      </p>
                    </div>
                    <div className="resource-box">
                      <strong className="resource-title">
                        <Link to="#">The WCAG Explained</Link>
                      </strong>
                      <p className="resource-desc">
                        Simple explanations of every WCAG criteria.
                      </p>
                    </div>
                    <div className="resource-box">
                      <strong className="resource-title">
                        <Link to="#">Support Center </Link>
                      </strong>
                      <p className="resource-desc">
                        Find answers to your questions plus tips and tricks on
                        how to use Stark.
                      </p>
                    </div>
                    <div className="resource-box">
                      <strong className="resource-title">
                        <Link to="#">Community</Link>
                      </strong>
                      <p className="resource-desc">
                        Join more than 3,500 accessibility folks from around the
                        world.
                      </p>
                    </div>
                    <div className="resource-box">
                      <strong className="resource-title">
                        <Link to="#">White Paper</Link>
                      </strong>
                      <p className="resource-desc">
                        Managing and growing your accessibility posture at any
                        scale.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Nav>

          {/* Right Menu */}
          <Nav className="align-items-center">
            <Nav.Link
              as={NavLink}
              to="/login/"
              className="text-white fw-bold me-3"
            >
              Log In
            </Nav.Link>
            <NavLink as={NavLink} to="/launch-trial/">
              <Button variant="light" className="fw-bold text-uppercase">
                Start Free Team Trial
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
