import React, { useState } from "react";
import "./PricingPlans.css";
import Cardlogo from "../images/CardLogo.svg";
import Logo1 from "../images/ROI.png";
import Logo2 from "../images/Leader.png";
import Logo3 from "../images/Love.png";
import Arrowimage from "../images/arrowimg.svg";

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState("teams");

  return (
    <div className="pricing-section">
      <div className="container">
        <h2>
          <span className="highlighted">Pricing Plans</span>
        </h2>
        <p>
          Whether you’re a small but mighty team, or 100,000 strong, we’ve got a
          plan to support what you need. Sign up and get started today.
        </p>

        {/* Tabs */}
        <div className="pricing-tabs">
          <button
            className={activeTab === "teams" ? "active-tab" : ""}
            onClick={() => setActiveTab("teams")}
          >
            Teams / Organizations
          </button>
          <button
            className={activeTab === "individuals" ? "active-tab" : ""}
            onClick={() => setActiveTab("individuals")}
          >
            Individuals
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="row g-2 justify-content-center">
          {activeTab === "teams" && (
            <>
              {/* Starter Plan */}
              <div className="col-md-6 col-lg-3">
                <div className="pricing-card">
                  <h5>Starter</h5>
                  <p>
                    For teams with an early program in need of basic
                    accessibility checks.
                  </p>
                  <h6>Always</h6>
                  <h2>Free</h2>
                  <h6 className="price-sub">Forever</h6>
                  <button className="btn-custom">Create free account</button>
                  <ul className="pricing-features">
                    <li>Limited roles & permissions</li>
                    <li>Up to 5 team projects</li>
                    <li>Manual scans and reports</li>
                    <li>Supported assets: Figma, code repos, public URLs</li>
                    <li>Monitor up to 5 pages</li>
                    <li>14-day report data storage</li>
                    <li>Limited access to tooling in Figma and browser</li>
                  </ul>
                </div>
              </div>

              {/* Launch Plan */}
              <div className="col-md-6 col-lg-3">
                <div className="pricing-card">
                  <h5>Launch</h5>
                  <p>
                    For smaller teams getting started with accessibility
                    collaboration.
                  </p>
                  <h6>From</h6>
                  <h2>$2,500</h2>
                  <h6 className="price-sub">per year</h6>
                  <button className="btn-custom btn-filled">
                    Start a free trial
                  </button>
                  <ul className="pricing-features">
                    <li>
                      3 <u>editors</u> included
                    </li>
                    <li>25 viewers included</li>
                    <li>Unlimited team projects</li>
                    <li>Weekly automated scans and reports</li>
                    <li>Supported assets: Figma, code repos, public URLs</li>
                    <li>Monitor up to 100 pages</li>
                    <li>30-day report data storage</li>
                    <li>Consolidated billing</li>
                    <li>
                      Full access to automated detection and remediation tooling
                      in design and code
                    </li>
                  </ul>
                </div>
              </div>

              {/* Grow Plan */}
              <div className="col-md-6 col-lg-3 position-relative">
                <div className="pricing-card highlighted-card">
                  <div className="plan-badge">
                    <img
                      src={Cardlogo}
                      alt="Badge Logo"
                      className="badge-logo"
                    />
                  </div>
                  <h5>Grow</h5>
                  <p>
                    For larger teams needing to comply with confidence
                    end-to-end.
                  </p>
                  <h6>From</h6>
                  <h2>$6,000</h2>
                  <h6 className="price-sub">per year</h6>
                  <button className="btn-custom btn-filled">
                    Talk to Sales
                  </button>
                  <ul className="pricing-features">
                    <li>
                      10 <u>editors</u> included
                    </li>
                    <li>50 viewers included</li>
                    <li>Unlimited team projects</li>
                    <li>Daily scans and insight reports</li>
                    <li>
                      Supported assets: Figma, code repos, CI/CD, public and
                      private URLs
                    </li>
                    <li>Monitor up to 1000 pages</li>
                    <li>180-day report data storage</li>
                    <li>Ticketing system integration</li>
                    <li>Compliance Center to manage accessibility posture</li>
                    <li>Centralized team admin with SSO</li>
                    <li>Consolidated billing</li>
                    <li>
                      Full access to automated detection and remediation tooling
                      in design and code
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scale Plan */}
              <div className="col-md-6 col-lg-3">
                <div className="pricing-card">
                  <h5>Scale</h5>
                  <p>
                    For organizations with custom accessibility and compliance
                    needs.
                  </p>
                  <h6>From</h6>
                  <h2>$15,000</h2>
                  <h6 className="price-sub">per year</h6>
                  <button className="btn-custom">Talk to Sales</button>
                  <ul className="pricing-features">
                    <li>
                      20 <u>editors</u> included
                    </li>
                    <li>Unlimited viewers</li>
                    <li>Unlimited team projects</li>
                    <li>Real-time scans and insights reports</li>
                    <li>
                      Supported assets: Figma, code repos, CI/CD, public and
                      private URLs
                    </li>
                    <li>Monitor up to 7500 pages</li>
                    <li>365-day report data storage</li>
                    <li>Ticketing system integration</li>
                    <li>Compliance Center to manage accessibility posture</li>
                    <li>
                      Centralized team admin with SSO and JIT provisioning
                    </li>
                    <li>Customizable terms and security reviews</li>
                    <li>Priority support and dedicated account manager</li>
                    <li>Enterprise-grade security, SOC2 and GDPR certified</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "individuals" && (
            <>
              {/* Starter */}
              <div className="col-md-6 col-lg-3 g-4">
                <div className="pricing-card">
                  <h5>starter</h5>
                  <p>For individuals getting started with accessibility.</p>
                  <h6>Always</h6>
                  <h2>Free</h2>
                  <h6 className="price-sub">Forever</h6>
                  <button className="btn-custom">Start a free trial</button>
                  <ul className="pricing-features">
                    <li>Access Stark’s manual design and browser tools</li>
                    <li>WCAG Checklist widget in Figma</li>
                    <li>Access to Slack Community</li>
                  </ul>
                </div>
              </div>

              {/* Premium*/}
              <div className="col-md-6 col-lg-3 g-4 position-relative">
                <div className="pricing-card highlighted-card">
                  <h5 style={{ color: " #4629b6" }}>Premium</h5>
                  <p>
                    For individuals looking automate and accelerate
                    accessibility.
                  </p>
                  <h6>From</h6>
                  <h2>$21</h2>
                  <h6 className="price-sub">
                    Per Month(or $210 paid annually)
                  </h6>
                  <button className="btn-custom btn-filled">Purchase</button>
                  <ul className="pricing-features">
                    <li>Everything in Starter, plus...</li>
                    <li>
                      Auto-remediate design issues with AI suggestions in Figma
                    </li>
                    <li>Automatic WCAG scans and reports in browser</li>
                    <li>Live code highlighting in browser web dev console</li>
                    <li>Manual scans and reports</li>
                    <li>Supported assets: Figma, code repos, public URLs</li>
                    <li>Monitor up to 10 pages</li>
                    <li>14-day report data storage</li>
                  </ul>
                </div>
              </div>

              {/* Scale Plan */}
              <div className="col-md-6 col-lg-3 g-4">
                <div className="pricing-card">
                  <h5>Scale</h5>
                  <p>
                    Buy multiple Premium accounts with one central billing app.
                  </p>
                  <h6>From</h6>
                  <h2>$198</h2>
                  <h6 className="price-sub">per user / year (min. 3 seats)</h6>
                  <button className="btn-custom">Purchase</button>
                  <ul className="pricing-features">
                    <li>Everything in Premium for up to 25 accounts</li>
                    <li>Consolidated billing</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* call out section */}
          {/* G2 Awards Section */}
          <section className="g2-badges-section py-5 mt-5">
            <div className="container text-center position-relative">
              {/* Optional Curved Arrow */}
              <img
                src={Arrowimage} // Replace with your local or hosted arrow image
                alt="Curved Arrow"
                className="position-absolute d-none d-md-block"
                style={{
                  width: "110px",
                  left: "100px",
                  top: "-30px",
                  transform: "rotate(-70deg)",
                  zIndex: "2",
                }}
              />

              {/* Badges Row */}
              <div className="row justify-content-center g-4">
                <div className="col-6 col-md-3 col-lg-2">
                  <img
                    src={Logo1} // Replace with your badge images
                    alt="Best ROI"
                    className="img-fluid"
                  />
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <img src={Logo2} alt="Leader" className="img-fluid" />
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <img src={Logo3} alt="Users Love Us" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>

          {/* closing divs */}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
