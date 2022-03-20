import React, { Component } from "react";
import InfoBox from "./InfoBox";
import ActionButton from "./ActionButton";

export default class InfoRow extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          position: "absolute",
          width: "100%",
          marginTop: 80,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="columns">
          <InfoBox
            icon={"fas fa-clock has-text-light"}
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
            icon={"fas fa-location-dot has-text-light"}
            content={
              <span>
                Drabantvägen 4, 194 33
                <br></br>
                Upplands Väsby, Sverige
              </span>
            }
            label={"ADRESS"}
          />
          <InfoBox
            icon={"fas fa-utensils has-text-light"}
            content={
              <ActionButton
                label={"BESTÄLL TAKEAWAY"}
                icon={"fas fa-basket-shopping has-text-black"}
              />
            }
            label={"TAKEAWAY?"}
          />
        </div>
      </div>
    );
  }
}
