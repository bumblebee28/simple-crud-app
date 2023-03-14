import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menubar/Menu";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Menu/>
    </div>
  );
}

export default App;
