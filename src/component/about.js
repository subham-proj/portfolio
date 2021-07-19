import React from "react";
import { Container, Card } from "react-bootstrap";

import Techs from "./technolgies";

function About() {
  return (
    <div>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Card className="about_card">
          <Card.Body>
            <Techs />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default About;
