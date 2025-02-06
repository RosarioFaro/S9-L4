import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/dragon.png";

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} alt="logo" width="40" height="40" className="me-2" />
          <span className="text-white fw-bold">TheFantasyCorner</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white fw-semibold me-3" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white fw-semibold me-3" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="text-white fw-semibold" href="#browse">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
