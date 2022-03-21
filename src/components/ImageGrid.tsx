/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Food1 from "../assets/food-1.png";
import "../styles/ImageGrid.css";
import GalleryImage1 from "../assets/gallery-image-1.png";
import GalleryImage2 from "../assets/gallery-image-2.png";
import GalleryImage3 from "../assets/gallery-image-3.png";
import GalleryImage4 from "../assets/gallery-image-4.png";
import GalleryImage5 from "../assets/gallery-image-5.png";
import GalleryImage6 from "../assets/gallery-image-6.png";

export default class ImageGrid extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <Carousel
            autoPlay
            centerMode
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            transitionTime={600}
          >
            <div className="slide-holder">
              <div className="columns is-gapless">
                <img
                  style={{ width: "600px", height: "600px" }}
                  alt=""
                  src={GalleryImage1}
                />
                <div>
                  <img
                    style={{ width: "600px", height: "300px" }}
                    alt=""
                    src={GalleryImage2}
                  />
                  <img
                    style={{ width: "600px", height: "300px" }}
                    alt=""
                    src={GalleryImage3}
                  />
                </div>
              </div>
            </div>
            <div className="slide-holder">
              <div className="columns is-gapless">
                <img
                  style={{
                    width: "600px",
                    height: "600px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src={GalleryImage5}
                />
                <div>
                  <img
                    style={{
                      width: "600px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    alt=""
                    src={GalleryImage4}
                  />
                  <img
                    style={{
                      width: "600px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    alt=""
                    src={GalleryImage6}
                  />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
