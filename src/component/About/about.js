import React from "react";
import { Container, Card } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Techs from "./technolgies";
import Timeline from "./Timeline";

function About() {
  return (
    <div>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Card className="about_card">
          <Card.Body>
            <h4 style={{ textAlign: "center", color: "goldenrod" }}>
              Academic Timeline
            </h4>
            <Timeline />

            <Techs />
            {/**<div className="tweet">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="subhamtw"
                options={{ height: 400, width: 600 }}
              />
  </div>*/}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default About;
