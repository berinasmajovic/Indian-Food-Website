import React, { Component } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import InfoBox from "../components/InfoBox";
import InfoRow from "../components/InfoRow";
import NavigationBar from "../components/NavigationBar";
import TitleContainer from "../components/TitleContainer";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <section className="container">
          <div className="container">
            <ImagesCarousel />
            <NavigationBar />
            <TitleContainer />
            <InfoRow />
          </div>
        </section>
      </div>
    );
  }
}
