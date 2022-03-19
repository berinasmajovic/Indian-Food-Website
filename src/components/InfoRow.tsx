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
              <div className="select">
                <select
                  style={{
                    backgroundColor: "#CAAB2A",
                    borderColor: "white",
                    fontFamily: "Libre Caslon Text",
                    color: "black",
                    marginRight: 5,
                    fontSize: "14px",
                  }}
                >
                  <option>IDAG: 08:00 - 16:00</option>
                  <option>IDAG: 08:00 - 16:00</option>
                </select>
              </div>
            }
            label={"ÖPPETTIDER"}
          />
          <InfoBox
            icon={faLocationDot}
            content={
              <>
                <label>{"Drabantvägen 4, 194 33"}</label>
                <br></br>
                <label>{"Upplands Väsby, Sverige"}</label>
              </>
            }
            label={"ADRESS"}
          />
          <InfoBox
            icon={faUtensils}
            content={
              <ActionButton
                label={"BESTÄLL TAKEAWAY"}
                icon={faBasketShopping}
              />
            }
            label={"TAKEAWAY?"}
          />
        </div>
      </div>
    );
  }
}
