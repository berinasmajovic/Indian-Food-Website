import React, { Component } from "react";
import ActionButton from "../base/ActionButton";

export interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: any;
}
export interface State {}

export default class EventCardItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div className="column is-one-quarter">
        <div className="card large has-background-black">
          <div className="card-image">
            <figure className="image is-1by4">
              <img src={this.props.image} alt=""></img>
            </figure>
          </div>
          <div
            className="card-content has-background-black-bis"
            style={{ textAlign: "left" }}
          >
            <div className="media">
              <div className="media-content">
                <p
                  className="subtitle is-size-6 has-text-warning"
                  style={{ fontFamily: "Libre Caslon Text" }}
                >
                  {this.props.title}
                </p>
                <p
                  className="title is-size-6 has-text-white"
                  style={{ fontFamily: "IBM Plex Sans" }}
                >
                  {this.props.subtitle}
                </p>
                <hr />
                <p className="is-size-7 has-text-grey-light">
                  {this.props.description}
                </p>
              </div>
            </div>

            <div className="control">
              <ActionButton label={"Läs mer"} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
