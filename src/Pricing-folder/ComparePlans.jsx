import React from "react";
import "./ComparePlans.css";

const ComparePlans = () => {
  return (
    <section className="compare-plans-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold compare-heading">
            <span className="highlight-banner">Compare Plans</span>
          </h2>
          <p className="lead">
            Check out all the features by plan to determine what fits your
            team’s needs.
          </p>
        </div>
        {/* Table */}
        <div className="table-responsive">
          <table className="table compare-table text-center align-middle">
            <thead>
              <tr>
                <th className="text-start" style={{ color: "#381fd1" }}>
                  Plan
                </th>
                <th>Starter</th>
                <th>Launch</th>
                <th>Grow</th>
                <th>Scale</th>
              </tr>
              <tr>
                <th className="text-start"></th>
                <th>
                  <button
                    className="btn outline btn-sm"
                    style={{
                      color: "#381fd1",
                      outline: "1px solid #381fd1",
                    }}
                  >
                    Create free account
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#381fd1", color: "white" }}
                  >
                    Select
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#381fd1", color: "white" }}
                  >
                    Talk to Sales
                  </button>
                </th>
                <th>
                  <button
                    className="btn outline btn-sm"
                    style={{
                      color: "#381fd1",
                      outline: "1px solid #381fd1",
                    }}
                  >
                    Talk to Sales
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-section">
                <td
                  className="text-start"
                  colSpan="5"
                  style={{ color: "#381fd1", backgroundColor: "#fcfcf6" }}
                >
                  Accessibility Platform <br />
                  <small className="text-muted " style={{ color: "black" }}>
                    Manage accessibility compliance with the rigor that matches
                    <br />
                    the rest of your business-critical processes.
                  </small>
                </td>
              </tr>
              <tr>
                <td className="text-start">
                  <a href="#">Editors</a>
                </td>
                <td>—</td>
                <td>3 included</td>
                <td>10 included</td>
                <td>20 included</td>
              </tr>
              <tr>
                <td className="text-start">*Price per additional editor</td>
                <td>—</td>
                <td>$198</td>
                <td>variable</td>
                <td>variable</td>
              </tr>
              <tr>
                <td className="text-start">Viewers</td>
                <td>limited</td>
                <td>25 included</td>
                <td>50 included</td>
                <td>unlimited</td>
              </tr>
              <tr>
                <td className="text-start">Scan & Reports Intervals</td>
                <td>manual</td>
                <td>weekly</td>
                <td>daily</td>
                <td>real-time</td>
              </tr>
              <tr>
                <td className="text-start text-primary" colSpan="5">
                  Supported Asset Types
                </td>
              </tr>
              <tr>
                <td className="text-start">Figma</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td className="text-start">Public URLs</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td className="text-start">Private URLs</td>
                <td>—</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td className="text-start">Code Repos</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td className="text-start">CI/CD</td>
                <td>—</td>
                <td>—</td>
                <td>✔</td>
                <td>✔</td>
              </tr>

              {/* Page limit */}
              <tr>
                <td className="text-start">Page limit</td>
                <td>5</td>
                <td>100</td>
                <td>1,000</td>
                <td>7,500</td>
              </tr>

              {/* Report storage */}
              <tr>
                <td className="text-start">Report storage limit</td>
                <td>14 days</td>
                <td>30 days</td>
                <td>180 days</td>
                <td>365 days</td>
              </tr>

              {/* Tooling access */}
              <tr>
                <td className="text-start">
                  Access to automated design & dev tools for editors
                </td>
                <td>—</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>

              {/* Ticketing system */}
              <tr>
                <td className="text-start">Ticketing system integration</td>
                <td>—</td>
                <td>—</td>
                <td>✔</td>
                <td>✔</td>
              </tr>

              {/* Compliance Center */}
              <tr className="table-section">
                <td className="text-start text-primary" colSpan="5">
                  Compliance Center
                </td>
              </tr>
              <tr>
                <td className="text-start ps-4">Custom Branding</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>✔</td>
              </tr>
              <tr>
                <td className="text-start ps-4">Custom Domain</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
