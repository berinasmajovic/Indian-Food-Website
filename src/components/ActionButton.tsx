import React, { Component } from "react";

export interface Props {
  label: string;
  icon?: string;
  style?: any;
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
        <div style={{ fontFamily: "Libre Caslon Text", color: "white" }}>
          <span>
            <button
              className="button"
              style={{
                fontFamily: "Libre Caslon Text",
                color: "black",
                marginRight: 5,
                backgroundColor: "#CAAB2A",
                ...this.props.style,
              }}
            >
              {this.props.icon && (
                <span className="icon is-large" style={{ marginRight: 5 }}>
                  <i className={this.props.icon}></i>
                </span>
              )}
              {this.props.label}
            </button>
          </span>
        </div>
      </div>
    );
  }
}
