/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import ImagesCarousel from "../components/images/ImagesCarousel";
import InfoRow from "../components/info/InfoRow";
import TitleContainer from "../components/base/TitleContainer";
import rightSideLine from "../assets/decorative-line-side-right.png";
import leftSideLine from "../assets/decorative-line-side-left.png";
import EventCardList from "../components/events/EventCardList";
import ImageGrid from "../components/images/ImageGrid";
import LocationCardList from "../components/locations/LocationCardList";
import HistoryCardList from "../components/history/HistoryCardList";
import AboutUsContentTable from "../components/about-us/AboutUsContentTable";
import ContactUsForm from "../components/contact/ContactUsForm";
import Footer from "../components/base/Footer";
import Navbar from "../components/base/Navbar";
import "../styles/Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <section className="container">
          <div
            className="section-1"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              marginTop: "3%",
            }}
          >
            <div
              className="content"
              style={{ position: "relative", zIndex: 100 }}
            >
              <div className="columns">
                <div className="column">
                  <Navbar />
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <TitleContainer />
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <InfoRow />
                </div>
              </div>
            </div>
            <div
              className="background column"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -100,
              }}
            >
              <ImagesCarousel />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="section-2 columns">
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
