import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/linkPage.module.css";

export default function MyNav(props) {
  return (
    <Navbar bg="dark" expand="lg" >
      <Container >
        <Navbar.Brand href="/">My Navigation</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.nav} me-auto`}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Again Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
