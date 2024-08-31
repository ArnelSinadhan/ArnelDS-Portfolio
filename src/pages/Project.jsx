import { useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../data/projectData";

export default function Project() {
  const allProjects = [...data.frontEnd, ...data.fullStackProjects];
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <Container className="featuredProjects">
        <Row className="mt-5 ">
          <Container className="projectTitle d-flex flex-column align-items-center my-4">
            <h1 className="text-center text-white mb-0">
              Projects Portfolio <i className="fa-solid fa-code"></i>
            </h1>
            <p className="px-md-5">
              I've built cool apps and websites using anything from HTML to
              React (and even MERN!). Here are some of my favorite projects over
              the course of my journey.
            </p>
          </Container>
          {allProjects.map((project) => (
            <Col key={project.id} md={4} className="mt-4">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
                initial={{ opacity: 0, y: 50 }} // Start state: hidden and moved down
                transition={{ duration: 0.5, delay: project.id * 0.1 }} // Add delay for each project
                className="h-100"
              >
                <Card className="m-3 border-0 h-100">
                  <motion.img
                    src={project.image}
                    style={{
                      border: "1px solid #fff",
                      borderRadius: "10px",
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#00c7ff", // Change border color on hover
                    }}
                    transition={{ duration: 0.3 }} // Smooth transition over 0.3 seconds
                    alt={project.title}
                  />

                  <Card.Body className="p-0 pt-4">
                    <Card.Header className="d-flex align-items-center justify-content-between">
                      <Card.Title>{project.title}</Card.Title>
                      <Container className="project-links d-flex justify-content-between align-items-center gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-link"></i>
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-github-alt"></i>
                        </a>
                      </Container>
                    </Card.Header>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      {project.technologies.map((techUse, index) => (
                        <Col key={index} className="techUse mx-1 mb-2">
                          {techUse}
                        </Col>
                      ))}
                    </Row>
                  </Card.Footer>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
