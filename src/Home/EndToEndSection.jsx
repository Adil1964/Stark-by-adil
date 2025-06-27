import { Container, Row, Col, Button } from "react-bootstrap";
import "./EndToEndSection.css";
import img1 from "../images/plugins.png";
import img2 from "../images/projects.png";
import img3 from "../images/ai-powered.png";
import img4 from "../images/compliance.png";

const EndToEndSection = () => {
  return (
    <section className="end-to-end-section text-center py-5">
      <Container>
        <p className="small mb-5 text-uppercase text-primary fw-bold">
          Explore the Stark Platform
        </p>
        <h2 className="fw-bold display-6">
          The only <span className="highlight">end-to-end solution</span> <br />
          from design and code to live product
        </h2>

        <Row className="mt-5">
          <Col md={6} lg={3} className="mb-4 text-start-box">
            <img src={img1} alt="Plugins" className="img-fluid mb-3" />
            <h6 className="text-uppercase small blue-text">
              Speed Up Design & Dev
            </h6>
            <h5 className="fw-bold blue-text para-text">
              Plug-ins & Integrations
            </h5>
            <p className=" para-text last-text">
              Meet your team where they work, from Figma and Sketch to GitHub
              and their browser of choice. An accessibility workflow built right
              into the tools they love. No need for them to switch or relearn.
            </p>
          </Col>
          <Col md={6} lg={3} className="mb-4 text-start-box">
            <img src={img2} alt="Reports" className="img-fluid mb-3" />
            <h6 className="text-uppercase small blue-text">
              Improve Collaboration
            </h6>
            <h5 className="fw-bold blue-text para-text">
              Projects, Reports & Insights
            </h5>
            <p className="para-text last-text">
              Manage your team’s accessibility workflow in the Stark Web app.
              Monitor and manage progress with real-time reports and insights
              across all your projects from design to code.
            </p>
          </Col>
          <Col md={6} lg={3} className="mb-4 text-start-box">
            <img src={img3} alt="Automation" className="img-fluid mb-3" />
            <h6 className="text-uppercase small blue-text">
              Accelerate Workflows
            </h6>
            <h5 className="fw-bold blue-text">
              AI-powered <br />
              Automation
            </h5>
            <p className="para-text last-text">
              Automated continuous scanning of design files and code
              repositories combined with AI-powered suggestions accelerates
              finding and fixing of accessibility issues in record time.
            </p>
          </Col>
          <Col md={6} lg={3} className="mb-4 text-start-box">
            <img src={img4} alt="Compliance" className="img-fluid mb-3" />
            <h6 className="text-uppercase small blue-text">Manage at Scale</h6>
            <h5 className="fw-bold blue-text">
              Compliance <br />
              Center
            </h5>
            <p className="para-text last-text">
              Manage your company’s accessibility posture in one central hub.
              Assign and document individual controls based on the regulatory
              frameworks. Access evidence for easy auditing.
            </p>
          </Col>
        </Row>

        <Button
          variant="primary"
          className="px-4 py-2 fw-bold mt-3 custom-button"
        >
          Get started for free
        </Button>
      </Container>
    </section>
  );
};

export default EndToEndSection;
