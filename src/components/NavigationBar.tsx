/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

export default class NavigationBar extends Component<
  {},
  { isActive: boolean }
> {
  state = {
    isActive: false,
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };
  render() {
    const navbarItemStyle = {
      fontFamily: "Libre Caslon Text",
      color: "white",
      margin: 20,
    };
    return (
      <>
      <nav className="level" style={{ width: "100%", position: "absolute" }}>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>
              HOME
            </a>
          </p>
          <p className="level-item has-text-centered">
            <Link to="#gallery" className="link is-info" style={navbarItemStyle}>
              GALLERY
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link to="#locations" className="link is-info" style={navbarItemStyle}>
              RESTAURANTS
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <img
              src={LogoImage}
              height={100}
              width={100}
              style={{ margin: "15px 100px" }}
            />
          </p>
          <p className="level-item has-text-centered">
            <Link to="#history" className="link is-info" style={navbarItemStyle}>
              HISTORY
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link to="#aboutUs" className="link is-info" style={navbarItemStyle}>
              ABOUT US
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link to="#contact" className="link is-info" style={navbarItemStyle}>
              CONTACT
            </Link>
          </p>
        </nav>
      </>
    );
  }
}
