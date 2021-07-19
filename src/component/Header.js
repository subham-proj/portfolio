import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar sticky="top" expand="lg">
        <Container>
          <Navbar.Brand
            style={{ color: "goldenrod" }}
            className="navLink"
            href="/"
          >
            Portfolio.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="navLink" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="navLink" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="navLink" href="/projects">
                Projects
              </Nav.Link>
              <Nav.Link className="navLink" href="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="navLink" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
