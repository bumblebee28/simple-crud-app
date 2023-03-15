import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/NavBar";

export default function Navbar() {
  return (
    <>
      <NavBar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <NavBar.Brand href="#home">Simple CRUD App</NavBar.Brand>
        </Container>
      </NavBar>
    </>
  );
}
