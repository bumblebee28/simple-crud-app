import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Read from "../CRUD-operations/Read";
import ReactDOM from "react-dom/client";
import Update from "../CRUD-operations/Update";
import Delete from "../CRUD-operations/Delete";

function Menu() {
  const root2 = ReactDOM.createRoot(document.getElementById("root2"));

  function read() {
    root2.render(<Read />);
  }

  function update() {
    root2.render(<Update />);
  }

  function delete1() {
    root2.render(<Delete />);
  }

  return (
    <>
      <Container className="p-4">
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
          <Button variant="outline-info" onClick={update}>
            UPDATE
          </Button>{" "}
          <Button variant="outline-info" onClick={delete1}>
            DELETE
          </Button>{" "}
        </Stack>
      </Container>
    </>
  );
}

export default Menu;
