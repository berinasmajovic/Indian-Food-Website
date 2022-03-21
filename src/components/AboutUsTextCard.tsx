import React, { Component } from "react";
import HistoryHorizontalLine from "./HistoryHorizontalLine";

export interface Props {
  title: string;
  description: string;
}
export interface State {}

export default class AboutUsTextCard extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div className="column is-four-fifths">
        <div className="card large has-background-black">
          <div
            className="card-content"
            style={{ textAlign: "left", backgroundColor: "black" }}
          >
            <div className="media">
              <div className="media-content">
                <p
                  className="subtitle is-size-3 has-text-warning"
                  style={{ fontFamily: "Libre Caslon Text" }}
                >
                  {this.props.title}
                </p>
                <HistoryHorizontalLine />
                <p className="is-size-7 has-text-grey-light">
                  {this.props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
