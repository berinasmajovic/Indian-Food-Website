import React, { Component } from "react";

export interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: any;
}
export interface State {}

export default class HistoryCardItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div className="column is-one-third">
        <div className="card large has-background-black">
          <div
            className="card-content has-background-black-bis"
            style={{ textAlign: "left" }}
          >
            <div className="media">
              <div className="media-content">
                <p className="subtitle is-size-7 has-text-white">
                  {this.props.title}
                </p>
                <p
                  className="title is-size-5 has-text-warning"
                  style={{ fontFamily: "IBM Plex Sans", fontWeight: 400 }}
                >
                  {this.props.subtitle}
                </p>
                <p
                  className="is-size-7 has-text-grey-light"
                >
                  {this.props.description}
                </p>
                <br></br>
                <div className="card-image">
                  <figure className="image is-1by4">
                    <img src={this.props.image} alt=""></img>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
