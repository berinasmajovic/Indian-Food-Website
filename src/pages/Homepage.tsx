import React, { Component } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import NavigationBar from "../components/NavigationBar";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <NavigationBar />
            <ImagesCarousel />
          </div>
        </section>
      </div>
    );
  }
}
