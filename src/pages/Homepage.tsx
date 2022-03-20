import React, { Component } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import InfoBox from "../components/InfoBox";
import InfoRow from "../components/InfoRow";
import NavigationBar from "../components/NavigationBar";
import SubtitleContainer from "../components/SubtitleContainer";
import TitleContainer from "../components/TitleContainer";
import rightSideLine from "../assets/decorative-line-side-right.png";
import leftSideLine from "../assets/decorative-line-side-left.png";
import "../styles/SideImage.css";
import EventCardList from "../components/EventCardList";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <section className="container">
          <div className="section-1">
            <ImagesCarousel />
            <NavigationBar />
            <TitleContainer />
            <InfoRow />
          </div>
        </section>
        <section className="container">
          <div className="section-2 columns" style={{ marginTop: "15%" }}>
            <img
              className="side-image"
              src={leftSideLine}
              style={{ marginTop: "15%" }}
            />
            <EventCardList />
            <img
              className="side-image"
              src={rightSideLine}
              style={{ marginTop: "15%" }}
            />
          </div>
        </section>
      </div>
    );
  }
}
