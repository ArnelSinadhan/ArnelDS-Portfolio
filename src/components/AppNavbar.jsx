import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useRef, useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

export default function AppNavbar() {
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false); // Optional: for spinner or loading state
  const [isNavOpen, setIsNavOpen] = useState(false); // Track the navbar state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notyf = new Notyf();

  const handleSendEmail = (e) => {
    e.preventDefault();

    console.log(formRef.current);

    const SERVICE_ID = "service_twob2rj";
    const TEMPLATE_ID = "template_ir2x40i";
    const PUBLIC_KEY = "Qw4JYfZv5aUJVj9hp";

    emailjs
      .sendForm("service_quwhkb2", "template_ir2x40i", formRef.current, {
        publicKey: "zSHoOaZ1OQ32jDmxm",
      })
      .then(
        () => {
          notyf.success("Message sent!");
          setShow(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          notyf.error("Error sending email!");
        }
      );
  };

  // Function to close the navbar when a link is clicked
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 992) {
      // 992px is the breakpoint for tablet and mobile in Bootstrap
      setIsNavOpen(false); // Close the navbar
    }
  };

  return (
    <>
      <Navbar expand="lg" className="py-md-4" expanded={isNavOpen}>
        <Container className="px-md-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar.Brand>
              <img src={logo} alt="logo png" className="logo" />
            </Navbar.Brand>
          </motion.div>
          <Navbar.Toggle onClick={() => setIsNavOpen(!isNavOpen)}>
            <i className="fa-solid fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <motion.div whileTap={{ scale: 0.5 }}>
                <NavLink
                  className="mx-md-4 nav-link"
                  to="/"
                  onClick={handleNavLinkClick} // Close navbar when clicked
                >
                  Home
                </NavLink>
              </motion.div>

              <motion.div whileTap={{ scale: 0.5 }}>
                <NavLink
                  className="mx-md-4 nav-link"
                  to="/about"
                  onClick={handleNavLinkClick} // Close navbar when clicked
                >
                  AboutMe
                </NavLink>
              </motion.div>

              <motion.div whileTap={{ scale: 0.5 }}>
                <NavLink
                  className="mx-md-4 nav-link"
                  to="/project"
                  onClick={handleNavLinkClick} // Close navbar when clicked
                >
                  Project
                </NavLink>
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.5 }}
                onClick={handleShow}
                className="mx-md-4 btn-primary contact-btn"
              >
                ContactMe
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ContactMe Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formRef} onSubmit={handleSendEmail}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="from_name"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="from_email"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                name="message"
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
