import React, { Component } from "react";
import background from "../assets/navigation-background-image.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ImagesCarousel extends Component {
  render() {
    return (
      <div style={{position: "absolute"}}>
        <Carousel showThumbs={false}>
          <div>
            <img src={background} />
          </div>
          <div>
            <img src={background} />
          </div>
          <div>
            <img src={background} />
          </div>
        </Carousel>
      </div>
    );
  }
}
