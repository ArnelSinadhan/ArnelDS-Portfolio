import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import data from "../data/projectData";
import { useNavigate } from "react-router";
import Typewriter from "typewriter-effect";
export default function Home() {
  const navigate = useNavigate();
  // Function to shuffle array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Shuffle and slice to get 3 projects
  const selectedProjects = shuffleArray(data.fullStackProjects).slice(0, 3);
  const handleOnclick = () => {
    navigate("/project");
  };
  return (
    <>
      <Container className="hero-container my-5">
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center align-items-center ">
            <motion.div
              initial={{ scale: 1.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                ease: "ease-in-out",
                duration: 2, // Total duration of the animation
                scale: { duration: 1 }, // Scale transition duration
                opacity: { duration: 2 }, // Opacity transition duration (can be the same or different)
              }}
            >
              <strong>Hi, I'm Arnel.</strong>
              <h1>
                Fullstack <span>Web Developer</span>
              </h1>
              <p>
                I have a passion for building projects from scratch and enjoy
                bringing ideas to life through code. In my free time, I love
                exploring new technologies and continuously improving my skills.
              </p>
              <a
                download="ArnelResume.pdf"
                href="/ArnelResume.pdf"
                className="btn btn-primary"
              >
                <i className="fa-solid fa-download"></i> Download CV
              </a>
            </motion.div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-end align-items-center "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              src="/hero.svg"
            ></motion.img>
          </Col>
        </Row>
      </Container>

      {/* 3 projects */}
      <Container className="featuredProjects">
        <Row className="mt-5 ">
          <Container className="d-flex align-items-center my-4">
            <hr className="flex-grow-1 mx-3" />
            <h1 className="text-center text-white mb-0">Projects Portfolio</h1>
            <hr className="flex-grow-1  mx-3" />
          </Container>
          {selectedProjects.map((project) => (
            <Col key={project.id} md={4} className="mt-4">
              <Card className="m-3 border-0 h-100">
                <motion.img
                  src={project.image}
                  style={{
                    border: "1px solid #fff",
                    borderRadius: "10px",
                  }}
                  whileHover={{
                    scale: 1.2,
                    borderColor: "#00c7ff", // Change border color on hover
                  }}
                  transition={{ duration: 0.3 }} // Smooth transition over 0.3 seconds
                ></motion.img>

                <Card.Body className="p-0 pt-4">
                  <Card.Header className="d-flex align-items-center justify-content-between">
                    <Card.Title>{project.title}</Card.Title>
                    <Container className="project-links d-flex justify-content-between align-items-center gap-4">
                      <a href={project.liveLink} target="blank">
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href={project.githubLink} target="blank">
                        <i className="fa-brands fa-github-alt"></i>
                      </a>
                    </Container>
                  </Card.Header>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    {project.technologies.map((techUse) => (
                      <Col key={techUse.id} className="techUse mx-1 mb-2">
                        {techUse}
                      </Col>
                    ))}
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <Container className="d-flex justify-content-center">
          <Button
            className="mt-5 w-50 text-center rounded-5"
            onClick={handleOnclick}
          >
            View All
          </Button>
        </Container>
      </Container>

      {/* Tools Used */}
      <Container className="toolsUsed mt-5 pt-5">
        <Row className=" align-items-center p-3">
          <Col className="toolsUsedText mb-3" md={4}>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Here is the tools I learned to build projects.",
                    "HTML, CSS, JavaScript",
                    "MongoDB, ExpressJS, ReactJs, NodeJs",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Col>
          <Col className="toolsUsedIcons" md={8}>
            <Row>
              {data.toolsUsed.map((tools) => (
                <Col className="toolIconWrapper">
                  <motion.img
                    className="toolsIcon"
                    src={tools.image}
                    whileHover={{
                      scale: 1.5,
                      borderColor: "#00c7ff", // Change border color on hover
                    }}
                    transition={{ duration: 0.2 }} // Smooth transition over 0.3 seconds
                  ></motion.img>

                  <h6>{tools.toolsName}</h6>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
