import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Container className="my-5 p-5">
        <Row className="socmed-wrapper p-0">
          <Col className="d-flex justify-content-end social-links">
            <a
              href="https://github.com/ArnelSinadhan"
              className="nav-link socmed"
              target="blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/arnel-sinadhan-ba467b269/"
              className="nav-link socmed"
              target="blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://www.facebook.com/arnel.sinadhan.1?mibextid=ZbWKwL"
              className="nav-link socmed"
              target="blank"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>

            <a
              href="mailto:arnelsinadhan19@gmail.com"
              className="nav-link socmed"
              target="blank"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </Col>
        </Row>
        <hr />

        <Row className="align-items-center">
          <Col className="footer-nav">
            <h5>PAGES</h5>
            <Container className="d-flex gap-3 p-0">
              <a href="/" className="nav-link footer-nav">
                Home
              </a>

              <a href="/about" className="nav-link footer-nav">
                AboutMe
              </a>

              <a href="/project" className="nav-link footer-nav">
                Project
              </a>
            </Container>
          </Col>
          <Col className="credits">
            <p>
              Design and build by{" "}
              <span style={{ color: "#00c7ff", fontWeight: "600" }}>Arnel</span>{" "}
              Sinadhan | &copy; 2024
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
