import React, { Component } from "react";
import LocationCardItem from "./LocationCardItem";
import SubtitleContainer from "./SubtitleContainer";
import LocationImage1 from "../assets/location-card-image-1.png";
import LocationImage2 from "../assets/location-card-image-2.png";

export default class LocationCardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <SubtitleContainer
                title={"Locations"}
                subtitle={
                  "Enim volutpat velit molestie morbi pharetra nam nisi et."
                }
              />
            </div>
          </div>
          <div className="columns" style={{ padding: "1" }}>
            <LocationCardItem
              header={"RESTAURANT"}
              title={"Restaurant Food"}
              description={
                "Cum pellentesque nisi sit facilisi suspendisse. Aliquet egestas at morbi ultricies euismod scelerisque. Malesuada rhoncus feugiat gravida adipiscing."
              }
              image={LocationImage1}
            />
            <LocationCardItem
              header={"RESTAURANT"}
              title={"Kitchen Restaurant"}
              description={
                "Ante a lacus, amet proin. Auctor turpis fermentum posuere tortor, diam sit cursus sit. Porttitor felis facilisis est amet, adipiscing vitae. Ac justo, convallis sed."
              }
              image={LocationImage2}
            />
          </div>
        </div>
      </div>
    );
  }
}
