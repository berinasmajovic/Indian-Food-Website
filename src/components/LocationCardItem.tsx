import React, { Component } from "react";
import ActionButton from "./ActionButton";

export interface Props {
  header: string;
  title: string;
  description: string;
  image: any;
}
export interface State {}

export default class LocationCardItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <div className="column" style={{textAlign: "left"}}>
        <div className="card large has-background-black">
          <div className="card-image">
            <figure className="image is-1by4">
              <img src={this.props.image} alt=""></img>
            </figure>
          </div>
          <div className="card-content has-background-dark">
            <div className="media">
              <div className="media-content">
                <p
                  className="title is-size-6 has-text-grey-light is-uppercase"
                  style={{ fontFamily: "IBM Plex Sans" }}
                >
                  {this.props.header}
                </p>
                <p
                  className="title is-size-4 has-text-warning"
                  style={{ fontFamily: "Libre Caslon Text" }}
                >
                  {this.props.title}
                </p>
                <p
                  className="is-size-7 has-text-grey-light"
                >
                  {this.props.description}
                </p>
              </div>
            </div>
            <div className="columns is-gapless">
              <div className="column is-one-third">
                <span className="icon is-medium">
                  <i className="fas fa-location-dot has-text-light"></i>
                </span>
                <span className="title is-7 has-text-light">
                  Jean Street 21105
                </span>
              </div>
              <div className="column is-one-third">
                <span className="icon is-medium">
                  <i className="fas fa-envelope has-text-light"></i>
                </span>
                <span className="title is-7 has-text-light">
                  email.address@gmail.com
                </span>
              </div>
              <div className="column is-one-third">
                <span className="icon is-medium">
                  <i className="fas fa-phone has-text-light"></i>
                </span>
                <span className="title is-7 has-text-light">076 027 41 51</span>
              </div>
            </div>

            <div className="media">
              <div className="media-content">
                <div className="columns is-gapless">
                  <div className="column is-one-third">
                    <span className="icon is-medium">
                      <i className="fas fa-clock has-text-light"></i>
                    </span>
                    <span className="title is-7 has-text-light">
                      Opening Hours
                    </span>
                  </div>
                </div>
                <div className="columns is-gapless">
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      måndag
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      09:00 - 17:00
                    </p>
                  </div>
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      TISDAG
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      09:00 - 17:00
                    </p>
                  </div>
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      ONSDAG
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      09:00 - 17:00
                    </p>
                  </div>
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      TORSDAG
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      09:00 - 17:00
                    </p>
                  </div>
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      FREDAG
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      09:00 - 17:00
                    </p>
                  </div>
                </div>
                <div className="columns is-gapless">
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      LÖRDAG
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      12:00 - 17:00
                    </p>
                  </div>
                  <div className="column is-one-fifth">
                    <p
                      className="title is-size-7 has-text-grey-light is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      SÖNDAG
                    </p>
                    <p
                      className="subtitle is-size-6 has-text-white is-uppercase"
                      style={{ fontFamily: "IBM Plex Sans" }}
                    >
                      12:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="control">
              <ActionButton
                label={"VISA MENY"}
                style={{ width: "50%" }}
                icon={"fas fa-utensils has-text-black"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
