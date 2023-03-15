import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Delete() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleId = (event) => {
    var id = event.target.value;
    setSelectedId(id);
  };

  function handleDelete() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedId}`, {
      method: "DELETE",
    });
    alert(`record with Id ${selectedId} deleted`);
  }

  return (
    <>
      <div>
        <Container className="col-md-5 mx-auto mt-5 text-center fw-normal">
          <form className="mb-5">
            <input
              type="number"
              name="id"
              placeholder="enter the id of the record to be deleted"
              onChange={handleId}
            />

            <Button type="button" onClick={handleDelete} className='mx-5'>
              delete
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
}
