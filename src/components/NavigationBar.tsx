import { url } from "inspector";
import React, { Component } from "react";
import logo from "../assets/logo.png";

export default class NavigationBar extends Component {
  render() {
    const navbarItemStyle = {
      fontFamily: "Libre Caslon Text",
      color: "white",
      margin: 30,
    };
    return (
      <div>
        <nav className="navbar is-transparent" style={{ visibility: "hidden" }}>
          <div className="navbar-brand" style={{ visibility: "visible" }}>
            <div
              className="navbar-burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div
              className="navbar-start"
              style={{ margin: "0 auto", visibility: "visible" }}
            >
              <a className="navbar-item" href="#" style={navbarItemStyle}>
                HOME
              </a>
              <a className="navbar-item" href="#" style={navbarItemStyle}>
                GALLERY
              </a>
              <a className="navbar-item" href="#" style={navbarItemStyle}>
                RESTAURANTS
              </a>
              <img
                src={logo}
                height={100}
                width={100}
                style={{ margin: "15px 100px" }}
              />
              <a className="navbar-item" href="#" style={navbarItemStyle}>
                HISTORY
              </a>
              <a className="navbar-item" href="#" style={navbarItemStyle}>
                ABOUT US
              </a>
              <a className="navbar-item" href="#" style={navbarItemStyle}>
                CONTACT
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
