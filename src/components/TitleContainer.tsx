import React, { Component } from "react";
import lineUp from "../assets/decorative-line-up.png";
import lineDown from "../assets/decorative-line-down.png";
import "../styles/TitleContainer.css";

export default class TitleContainer extends Component {
  render() {
    return (
      <div
        className="container title-container"
        style={{ width: "60%", paddingTop: 180 }}
      >
        <img src={lineUp} />
        <h2
          style={{
            fontFamily: "Libre Caslon Text",
            fontSize: "80px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
          }}
        >
          Best Indian Food in Västerås
        </h2>
        <img src={lineDown} />
      </div>
    );
  }
}
