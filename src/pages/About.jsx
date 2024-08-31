import { Row, Col, Container, Card } from "react-bootstrap";
import WorkTimeline from "../components/WorkTimeline";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import data from "../data/projectData";

export default function About() {
  return (
    <>
      <Container>
        <Row className="mb-4 justify-content-center align-items-center py-5 my-5">
          <Col className="aboutMe">
            <motion.h1
              className="text-white my-5"
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hello, <span style={{ color: "#00c7ff" }}>I'm Arnel!</span>
            </motion.h1>

            <strong style={{ fontSize: "24px" }} className="text-white">
              <Typewriter
                options={{
                  strings: [
                    "I’m a <span style='color: #00c7ff;'>Full-Stack Developer</span> with a passion for crafting websites from the ground up! I thrive on transforming ideas into dynamic, functional web experiences.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </strong>
          </Col>
        </Row>
        <Row className="justify-content-center">
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
      </Container>
      <WorkTimeline />
    </>
  );
}
