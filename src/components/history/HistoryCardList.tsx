import React, { Component } from "react";
import EventImage1 from "../../assets/event-img-1.jpg";
import EventImage2 from "../../assets/event-img-2.jpg";
import EventImage3 from "../../assets/event-img-3.jpg";
import HistoryCardItem from "./HistoryCardItem";
import SubtitleContainer from "../base/SubtitleContainer";
import "../../styles/HorizontalLine.css";
import HistoryHorizontalLine from "./HistoryHorizontalLine";

export default class HistoryCardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <SubtitleContainer
                title={"History"}
                subtitle={
                  "Enim volutpat velit molestie morbi pharetra nam nisi et."
                }
              />
            </div>
          </div>
          <HistoryHorizontalLine />
          <div className="columns" style={{ padding: "1" }}>
            <HistoryCardItem
              title={"OPENING"}
              subtitle={"2005"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={EventImage1}
            />
            <HistoryCardItem
              title={"BEGGINING YEARS"}
              subtitle={"2005 - 2020"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={EventImage2}
            />
            <HistoryCardItem
              title={"PRESENT"}
              subtitle={"2020 - Present"}
              description={
                "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne."
              }
              image={EventImage3}
            />
          </div>
        </div>
      </div>
    );
  }
}
