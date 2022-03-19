import React from "react";
import "./App.css";
import ImagesCarousel from "./components/ImagesCarousel";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <ImagesCarousel />
        
      </header>
    </div>
  );
}

export default App;
