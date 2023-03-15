import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menubar/Menu";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Menu/>
    </div>
  );
}

export default App;
