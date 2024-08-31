import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "../data/projectData";
import { Container } from "react-bootstrap";

export default function WorkTimeline() {
  return (
    <Container>
      <h1 className="text-white mb-5">Work Timeline</h1>
      <VerticalTimeline layout="2-columns">
        {data.workExp.map((work) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              border: "#00c7ff, solid, 2px",
              color: "#fff",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "15px solid #00c7ff " }}
            date={work.date}
            iconStyle={{ background: "#00c7ff", color: "#fff" }}
            icon={
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                id="work"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="primary"
                    d="M20,6H17V4a2,2,0,0,0-2-2H9A2,2,0,0,0,7,4V6H4A2,2,0,0,0,2,8V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6ZM9,4h6V6H9Z"
                    style={{ fill: "#000000" }}
                  ></path>
                  <path
                    id="secondary"
                    d="M21.64,6.86A2,2,0,0,0,20,6H4a2,2,0,0,0-1.64.86,1,1,0,0,0-.1,1L4,12a5,5,0,0,0,4.6,3h6.72A5,5,0,0,0,20,12l1.78-4.15A1,1,0,0,0,21.64,6.86Z"
                    style={{ fill: "#2ca9bc" }}
                  ></path>
                  <rect
                    id="primary-2"
                    data-name="primary"
                    x="10"
                    y="12"
                    width="4"
                    height="4"
                    rx="1"
                    style={{ fill: "#000000" }}
                  ></rect>
                </g>
              </svg>
            }
          >
            <h3 className="vertical-timeline-element-title">
              {work.workTitle}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {work.companyName}
            </h4>
            <p>{work.shortDescription}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
}
