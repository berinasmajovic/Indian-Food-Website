import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Food1 from "../assets/food-1.png";
import "../styles/ImageGrid.css";

export default class ImageGrid extends Component {
  render() {
    return (
      <div style={{width: "100%"}}>
        <Carousel showThumbs={false}>
          <div className="columns">
            <img src={Food1}/>
            <img src={Food1}/>
            <img src={Food1}/>
          </div>
          <div></div>
        </Carousel>
      </div>
    );
  }
}
