import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PCard from "./projectCard";

import pic1 from "../../assets/proj1.png";
import pic2 from "../../assets/proj2.png";
import pic3 from "../../assets/proj3.png";

const s = [
  {
    name: "Growth Agency (Landing Page)",
    description:
      "This is a freelance project in which I have created the landing page of the company using React.js",
    image: pic1,
    live: "http://growthagency.in/",
    code: "",
  },
  {
    name: "Covid19 India Tracker",
    description:
      "This web app fetches official data of covid patients and displays them in tabular form",
    image: pic2,
    live: "https://subham-proj.github.io/covid-19/",
    code: "https://github.com/subham-proj/covid-19",
  },
  {
    name: "Codeforces Analyzer",
    description:
      "This web app lets you search Codeforces users and displays data in different forms for visualization",
    image: pic3,
    live: "http://cf-analyzer.netlify.app/",
    code: "https://github.com/subham-proj/cf-analyzer",
  },
];

function Projects() {
  return (
    <div>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Row>
          {s.map((s) => (
            <Col style={{ paddingTop: "30px" }}>
              <PCard data={s} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
