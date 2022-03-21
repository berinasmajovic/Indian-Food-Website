/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import SubtitleContainer from "../base/SubtitleContainer";
import "../../styles/HorizontalLine.css";
import AboutUsImage1 from "../../assets/about-us-image-1.png";
import AboutUsImage2 from "../../assets/about-us-image-2.png";
import AboutUsTextCard from "./AboutUsTextCard";

export default class AboutUsContentTable extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <SubtitleContainer
                title={"About us"}
                subtitle={
                  "Sit orci orci velit elementum et est. Non, cursus arcu."
                }
              />
            </div>
          </div>
          <div className="columns has-text-centered is-vcentered">
            <div className="column is-three-fifths">
              <img src={AboutUsImage1}></img>
            </div>
            <div className="column">
              <AboutUsTextCard
                title={"Making food for the soul"}
                description={
                  "Leo vitae augue lectus dignissim magna non id augue vel. Sit nulla sit vitae odio quisque nulla platea. Sem mauris et imperdiet quis dignissim. A diam nibh magna viverra adipiscing etiam id. Phasellus malesuada lorem sed in nisl id massa. Id eu id et cursus risus id sit mus neque ultrices a."
                }
              />
            </div>
          </div>
          <div className="columns has-text-centered is-vcentered">
            <div className="column">
              <AboutUsTextCard
                title={"Always ready and prepared"}
                description={
                  "A tristique aenean vestibulum nisl, non proin. Aenean tempus, eget libero tortor amet in pellentesque morbi. Viverra velit, quis varius ac tempus. Arcu ac, vivamus varius fermentum fames eu at sit. Netus in etiam mi porta in posuere. Aenean ut lobortis eget venenatis eget eu et."
                }
              />
            </div>
            <div className="column is-three-fifths">
              <img src={AboutUsImage2}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
