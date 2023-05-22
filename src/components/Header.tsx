import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { String } from "react";

const navStyle = {
  backgroundColor: "purple",
};

interface HeaderProps {
  title: string;
  mode: "landing" | "main";
}

const Header: React.FC<HeaderProps> = ({ title, mode }) => {
  if (mode == "landing")
    return (
      <Navbar style={navStyle} variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link href="#home">Sign In</Nav.Link>
              <Nav.Link href="#features">Sign Up</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  else {
    return (
      <Navbar style={navStyle} variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link href="#home">&nbsp;Group&nbsp;</Nav.Link>
              <Nav.Link href="#features">&nbsp;Learn&nbsp;</Nav.Link>
              <Nav.Link href="#pricing">&nbsp;Profile&nbsp;</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default Header;
