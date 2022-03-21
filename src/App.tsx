import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
