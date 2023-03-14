import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Menu() {
  return (
    <>
      <Container>
        <h3  className="col-md-5 mx-auto mt-5 text-center fw-normal">Select any CRUD Operation</h3>
        <Stack direction="horizontal" gap={5}  className="col-md-2 mx-auto my-4 justify-content-center">
          <Button variant="outline-info">CREATE</Button>{" "}
          <Button variant="outline-info">READ</Button>{" "}
          <Button variant="outline-info">UPDATE</Button>{" "}
          <Button variant="outline-info">DELETE</Button>{" "}
        </Stack>
      </Container>
    </>
  );
}

export default Menu;
