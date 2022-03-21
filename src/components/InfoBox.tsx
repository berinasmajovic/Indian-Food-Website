import React, { Component } from "react";

export interface Props {
  icon: string;
  content: any;
  label?: string;
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
        style={{
          margin: 10,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          padding: 10,
          color: "white",
          fontWeight: 400,
          fontSize: "14px",
          width: "100%"
        }}
      >
        <div className="columns is-vcentered">
          <div className="column is-2" style={{ margin: "10px" }}>
            <span className="icon is-large fa-2xl">
              <i className={this.props.icon}></i>
            </span>
          </div>
          <div className="column" style={{ textAlign: "left" }}>
            {this.props.label && (
              <>
                <span>
                  <label style={{ fontSize: "10px" }}>{this.props.label}</label>
                </span>
                <br></br>
              </>
            )}

            <span style={{ fontFamily: "Libre Caslon Text" }}>
              {this.props.content}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
