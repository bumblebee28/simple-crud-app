import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Create() {
  const [newData, setNewData] = useState({ id: "", title: "", body: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${newData.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: newData.id,
        title: newData.title,
        body: newData.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        alert(
          `object created- id: ${json.id}, title: ${json.title}, body: ${json.body}`
        )
      );
  };

  return (
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
            onChange={handleInputChange}
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
            Create
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
