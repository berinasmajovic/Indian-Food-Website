/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import CarouselImage1 from "../../assets/navigation-background-image.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/CustomIndicator.css";

export default class ImagesCarousel extends Component {
  render() {
    return (
      <Carousel
        className="carousel"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
      >
        <div>
          <img src={CarouselImage1} />
        </div>
        <div>
          <img src={CarouselImage1} />
        </div>
        <div>
          <img src={CarouselImage1} />
        </div>
      </Carousel>
    );
  }
}
