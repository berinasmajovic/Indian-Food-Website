/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import lineDown from "../assets/decorative-line-down.png";

export interface Props {
  title: string;
  subtitle: string;
}
export interface State {}

export default class SubtitleContainer extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div className="container" style={{ width: "60%" }}>
        <h2
          style={{
            fontFamily: "Libre Caslon Text",
            fontSize: "40px",
            color: "white",
          }}
        >
          {this.props.title}
        </h2>
        <h1
          style={{
            fontFamily: "",
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          {this.props.subtitle}
        </h1>
        <br></br>
        <img src={lineDown} />
      </div>
    );
  }
}
