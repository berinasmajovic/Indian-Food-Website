import React, { Component } from "react";
import InfoBox from "./InfoBox";
import {
  faClock,
  faLocationDot,
  faUtensils,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton";

export default class InfoRow extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          position: "absolute",
          width: "100%",
          marginTop: 540,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="columns">
          <InfoBox
            icon={faClock}
            content={
              <ActionButton
                label={"BESTÄLL TAKEAWAY"}
                icon={faBasketShopping}
              />
            }
          />
          <InfoBox
            icon={faLocationDot}
            content={
              <ActionButton
                label={"BESTÄLL TAKEAWAY"}
                icon={faBasketShopping}
              />
            }
          />
          <InfoBox
            icon={faUtensils}
            content={
              <ActionButton
                label={"BESTÄLL TAKEAWAY"}
                icon={faBasketShopping}
              />
            }
          />
        </div>
      </div>
    );
  }
}
