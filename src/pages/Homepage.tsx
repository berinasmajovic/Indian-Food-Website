/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import InfoRow from "../components/InfoRow";
import NavigationBar from "../components/NavigationBar";
import TitleContainer from "../components/TitleContainer";
import rightSideLine from "../assets/decorative-line-side-right.png";
import leftSideLine from "../assets/decorative-line-side-left.png";
import "../styles/SideImage.css";
import EventCardList from "../components/EventCardList";
import ImageGrid from "../components/ImageGrid";
import LocationCardList from "../components/LocationCardList";
import HistoryCardList from "../components/HistoryCardList";
import AboutUsContentTable from "../components/AboutUsContentTable";
import ContactUsForm from "../components/ContactUsForm";
import Footer from "../components/Footer";

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
        <section id="gallery" className="container">
          <div
            className="section-3 columns"
            style={{ marginTop: "3%", width: "100%" }}
          >
            <ImageGrid />
          </div>
        </section>
        <section id="locations" className="container">
          <div className="section-4 columns" style={{ marginTop: "3%" }}>
            <LocationCardList />
          </div>
        </section>
        <section id="history" className="container">
          <div className="section-5 columns" style={{ marginTop: "3%" }}>
            <HistoryCardList />
          </div>
        </section>
        <section id="aboutUs" className="container">
          <div className="section-6 columns" style={{ marginTop: "3%" }}>
            <AboutUsContentTable />
          </div>
        </section>
        <section id="contact" className="container">
          <div className="section-7 columns" style={{ marginTop: "3%" }}>
            <img
              className="side-image"
              src={rightSideLine}
              style={{ marginRight: "1%", height: "500px" }}
            />
            <img
              className="side-image"
              src={leftSideLine}
              style={{ height: "500px" }}
            />
            <ContactUsForm />
            <img
              className="side-image"
              src={rightSideLine}
              style={{ marginRight: "1%", height: "500px" }}
            />
            <img
              className="side-image"
              src={leftSideLine}
              style={{ height: "500px" }}
            />
          </div>
        </section>
        <section className="container">
          <Footer />
        </section>
      </div>
    );
  }
}
