import React, { Component } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import InfoBox from "../components/InfoBox";
import InfoRow from "../components/InfoRow";
import NavigationBar from "../components/NavigationBar";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
          <ImagesCarousel />
          <NavigationBar />
        </div>
        <InfoRow />
      </div>
    );
  }
}
