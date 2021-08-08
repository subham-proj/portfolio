import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PCard from "./projectCard";

import pic1 from "../../assets/proj1.png";
import pic2 from "../../assets/proj2.png";
import pic3 from "../../assets/proj3.png";
import pic4 from "../../assets/proj4.png";

const s = [
  {
    id: "1",
    name: "Growth Agency (Landing Page)",
    description:
      "This is a freelance project in which I have created the landing page of the company using React.js",
    image: pic1,
    live: "http://growthagency.in/",
    code: "",
  },
  {
    id: "2",
    name: "Covid19 India Tracker",
    description:
      "This web app fetches official data of covid patients and displays them in tabular form",
    image: pic2,
    live: "https://subham-proj.github.io/covid-19/",
    code: "https://github.com/subham-proj/covid-19",
  },
  {
    id: "3",
    name: "Codeforces Analyzer",
    description:
      "This web app lets you search Codeforces users and displays data in different forms for visualization",
    image: pic3,
    live: "http://cf-analyzer.netlify.app/",
    code: "https://github.com/subham-proj/cf-analyzer",
  },
  {
    id: "4",
    name: "Blogging Web App",
    description:
      "This is a Full Stack blogging web app developed in MERN Stack. It has User authentication feature and user can perform CRUD operations in the blogs",
    image: pic4,
    live: "https://blogging-web-app.netlify.app/",
    code: "https://github.com/subham-proj/blogging",
  },
  {
    id: "5",
    name: "Buy My Cookies",
    description:
      "This is a platform where you can participate in an auction to buy/sell cookies. This auction platform is developed in MERN stack",
    image: pic4,
    live: "https://buymycookies.netlify.app/",
    code: "https://github.com/subham-proj/buymycookies",
  },
];

function Projects() {
  return (
    <div>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Row>
          {s.map((s) => (
            <Col style={{ paddingTop: "30px" }} key={s.id}>
              <PCard data={s} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
