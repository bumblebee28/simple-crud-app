import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Update() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({title: "", body: "" });
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleId = (event) => {
    var id = event.target.value;
    setSelectedId(id);
  };

  const handleUpdateClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        const newDataArray = data.map((datum) =>
          datum.id === updatedData.id ? updatedData : datum
        );
        setData(newDataArray);
        setNewData({title: "", body: "" });
        setSelectedId(null);
      });
  };

  return (
    <div>
      <Container>
        <form className="mb-5">
        <Stack
          direction="horizontal"
          gap={5}
          className="col-md-2 mx-auto my-4 justify-content-center"
        >
          <input
            type="number"
            name="id"
            placeholder="id"
            onChange={handleId}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="body"
            placeholder="Body"
            value={newData.body}
            onChange={handleInputChange}
          />
          <Button type="button" onClick={handleUpdateClick}>
            Update
          </Button>
          </Stack>
        </form>
        <Container className="overflow-scroll" style={{ height: 400 }}>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center fw-normal">
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}
