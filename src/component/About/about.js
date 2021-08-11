import React from "react";
import { Container, Card } from "react-bootstrap";
import Timeline from "./Timeline";
import GithubProfile from "./githubProfile";

function About() {
  return (
    <div>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Card className="about_card">
          <Card.Body>
            <GithubProfile />
            <h4 style={{ textAlign: "center", color: "goldenrod" }}>
              Academic Timeline
            </h4>
            <Timeline />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default About;
