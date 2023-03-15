import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Read from "../CRUD-operations/Read";
import ReactDOM from "react-dom/client";

function Menu() {
  function read() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Read />);
  }

  return (
    <>
      <Container className="p-5">
        <h3 className="col-md-5 mx-auto mt-5 text-center fw-normal">
          Select any operation
        </h3>
        <Stack
          direction="horizontal"
          gap={5}
          className="col-md-2 mx-auto my-4 justify-content-center"
        >
          <Button variant="outline-info" onClick={read}>
            READ
          </Button>{" "}
          <Button variant="outline-info">UPDATE</Button>{" "}
          <Button variant="outline-info">DELETE</Button>{" "}
        </Stack>
      </Container>
    </>
  );
}

export default Menu;
