import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";

const user_id = process.env.REACT_APP_USER_ID;
const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    let templateParams = {
      name: name,
      message: message,
      email: email,
      phone: phone,
    };
    emailjs.send(service_id, template_id, templateParams, user_id).then(
      function (response) {
        alert("Your message has been successfully delivered!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Card className="contact">
          <Card.Body>
            <h3 style={{ textAlign: "center", paddingBottom: "40px" }}>
              Send me a message
            </h3>
            <Form onSubmit={sendForm}>
              <Row>
                <Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Your Name*"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Your email address*"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Your Phone number"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your message here"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" size="lg">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
