import React, { Component } from "react";
import lineUp from "../assets/decorative-line-up.png";
import lineDown from "../assets/decorative-line-down-updated.png";
import "../styles/TitleContainer.css";

export default class TitleContainer extends Component {
  render() {
    return (
      <div
        className="container title-container"
        style={{ width: "60%", justifyContent: "center" }}
      >
        <img src={lineUp} />
        <div
        className="title"
          style={{
            fontFamily: "Libre Caslon Text",
            fontSize: "75px",
            fontWeight: 700,
            color: "white",
            textAlign: "center"
          }}
        >
          Best Indian Food in Västerås
        </div>
        <img src={lineDown} />
      </div>
    );
  }
}
