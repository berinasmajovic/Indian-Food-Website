/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import LogoImage from "../../assets/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="columns has-background-black-ter is-vcentered">
        <div className="column">
          <img src={LogoImage} />
        </div>
        <div className="column has-text-centered">
          <span className="icon is-large fa-2xl">
            <i className="fa-solid fa-circle-up has-text-warning"></i>
          </span>
          <p>Denna hemsida är skapad med hemsida är skapad</p>
        </div>
        <div className="column has-text-centered">
          <span className="icon is-large fa-2xl">
            <i className="fa-brands fa-facebook has-text-warning"></i>
          </span>
          <span className="icon is-large fa-2xl">
            <i className="fa-brands fa-instagram has-text-warning"></i>
          </span>
          <p>© Indian Food Website 2022 • All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
