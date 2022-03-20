import React, { Component } from "react";
import Event1 from "../assets/event-img-1.jpg";
import Event2 from "../assets/event-img-2.jpg";
import Event3 from "../assets/event-img-3.jpg";
import EventCardItem from "./EventCardItem";
import SubtitleContainer from "./SubtitleContainer";

export default class EventCardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <SubtitleContainer
                title={"Events"}
                subtitle={
                  "Enim volutpat velit molestie morbi pharetra nam nisi et."
                }
              />
            </div>
          </div>
          <div className="columns" style={{ padding: "1" }}>
            <EventCardItem
              title={"Libero commodo arcu elementum eget pharetra."}
              subtitle={"Varje tisdag | 15:00 - 20:00"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={Event1}
            />
            <EventCardItem
              title={"Ligula molestie pharetra auctor tincidunt id turpis et. "}
              subtitle={"Varje tisdag | 15:00 - 20:00"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={Event2}
            />
            <EventCardItem
              title={
                "Pellentesque libero tempor vel nec nulla odio vulputate ut."
              }
              subtitle={"Varje tisdag | 15:00 - 20:00"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={Event3}
            />
            <EventCardItem
              title={
                "Sed risus at consectetur vitae ut mauris scelerisque nullam."
              }
              subtitle={"Varje tisdag | 15:00 - 20:00"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={""}
            />
          </div>
        </div>
      </div>
    );
  }
}
