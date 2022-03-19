import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export interface Props {
  label: string;
  icon: IconProp;
}
export interface State {}

export default class ActionButton extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div>
        <div
          
          style={{ fontFamily: "Libre Caslon Text", color: "white" }}
        >
          <span>
            <button
              className="button"
              style={{
                fontFamily: "Libre Caslon Text",
                color: "black",
                marginRight: 5,
                backgroundColor: "#CAAB2A",
              }}
            >
              <span className="icon is-large" style={{ marginRight: 5 }}>
                <FontAwesomeIcon icon={this.props.icon} />
              </span>
              {this.props.label}
            </button>
          </span>
        </div>
      </div>
    );
  }
}
