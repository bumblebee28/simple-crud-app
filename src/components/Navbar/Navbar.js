import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/NavBar";

export default function Navbar() {
  return (
    <>
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Simple CRUD App</NavBar.Brand>
        </Container>
      </NavBar>
    </>
  );
}
