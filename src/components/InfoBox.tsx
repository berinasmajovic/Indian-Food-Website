import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Props { 
    icon: IconProp,
    content: any
}
export interface State {}

export default class InfoBox extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div
        className="box has-text-light"
        style={{ margin: 10, backgroundColor: "rgba(255, 255, 255, 0.4)", padding: 10 }}
      >
        <div className="columns is-vcentered">
          <div className="column is-1">
            <span className="icon is-large fa-xl">
              <FontAwesomeIcon icon={this.props.icon} />
            </span>
          </div>
          <div
            className="column"
            style={{ fontFamily: "Libre Caslon Text", color: "white", fontWeight: 400, fontSize: "14px" }}
          >
            <span>{this.props.content}</span>
          </div>
        </div>
      </div>
    );
  }
}
