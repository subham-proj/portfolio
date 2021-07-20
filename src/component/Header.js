import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar sticky="top" expand="lg">
        <Container>
          <Navbar.Brand
            to="/"
            style={{ color: "goldenrod" }}
            className="navLink"
          >
            Portfolio.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <NavLink
                activeClassName="active"
                exact={true}
                to="/"
                className="navLink"
              >
                Home
              </NavLink>
              <NavLink activeClassName="active" to="/about" className="navLink">
                About
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/projects"
                className="navLink"
              >
                Projects
              </NavLink>
              <NavLink activeClassName="active" to="/blogs" className="navLink">
                Blogs
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/contact"
                className="navLink"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
