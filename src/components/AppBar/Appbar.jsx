import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./appbar.css";
import { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import GitHubIcon from "@mui/icons-material/GitHub";

const Appbar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const [showbrand, setshowbrand] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#EFEAE6") : setnavColor("transparent");
    window.scrollY > 10 ? setshowbrand(true) : setshowbrand(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Navbar
      style={{
        backgroundColor: navColor,
        transition: "all 0.5s",
      }}
      expand="lg"
      sticky="top"
    >
      <Container fluid>
        {showbrand && (
          <Navbar.Brand>Awesome <b className="shortcut-styling">Shortcuts</b>
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
          </Form>
          <Nav>
            <Nav.Link eventKey={2} href="https://github.com/irtaza9">
              <GitHubIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
