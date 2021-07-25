import React from "react";
import { Button, Card, Tooltip, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Action Restricted
  </Tooltip>
);

function ProjectCard({ data }) {
  return (
    <div>
      <Card className="project_cards">
        <Card.Img variant="top" src={data.image} width="100%" height="100%" />
        <Card.Body>
          <Card.Title style={{ color: "goldenrod" }}>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>

          <div className="d-grid gap-2">
            {data.live ? (
              <Button href={data.live} target="_blank" size="lg">
                Live Project
              </Button>
            ) : (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 500 }}
                overlay={renderTooltip}
              >
                <Button size="lg">Live Project</Button>
              </OverlayTrigger>
            )}

            {data.code ? (
              <Button
                href={data.code}
                target="_blank"
                className="repo-btn"
                variant="dark"
                size="lg"
              >
                Source Code
              </Button>
            ) : (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 500 }}
                overlay={renderTooltip}
              >
                <Button className="repo-btn" variant="dark" size="lg">
                  Source Code
                </Button>
              </OverlayTrigger>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
