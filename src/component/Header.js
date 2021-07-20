import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar sticky="top" expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ color: "goldenrod" }}
            className="navLink"
          >
            Portfolio.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link as={Link} to="/" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="navLink">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="navLink">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="navLink">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="navLink">
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
