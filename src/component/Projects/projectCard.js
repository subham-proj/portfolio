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
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>

          <div className="d-grid gap-2">
            {data.live ? (
              <Button
                href={data.live}
                target="_blank"
                variant="success"
                size="lg"
              >
                Live
              </Button>
            ) : (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 500 }}
                overlay={renderTooltip}
              >
                <Button variant="success" size="lg">
                  Live
                </Button>
              </OverlayTrigger>
            )}

            {data.code ? (
              <Button href={data.code} target="_blank" variant="dark" size="lg">
                Respository
              </Button>
            ) : (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 500 }}
                overlay={renderTooltip}
              >
                <Button variant="dark" size="lg">
                  Respository
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
