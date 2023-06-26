import "../../styles/Header.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import EzMeals from "../../assets/icons/2095680.png";

function Header() {
  return (
    <Navbar collapseOnSelect className=" custom-navbar color-nav">
      <Container>
        <Navbar.Brand className="nav-logo" href="/">
          <img className="home-logo" src={EzMeals} alt="EzMeals" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Stores" id="collasible-nav-dropdown">
              <NavDropdown.Item
                className="custom-dropdown-item-1"
                href="/independent-davie"
              >
                Independent Davie St
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="custom-dropdown-item-2"
                href="/add-store"
              >
                Submit Your Local Store
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="*">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
