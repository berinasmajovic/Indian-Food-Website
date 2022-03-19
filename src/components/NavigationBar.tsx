import React, { Component } from "react";
import logo from "../assets/logo.png";

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
      <div
        className="container"
        style={{
          justifyContent: "center",
          position: "absolute",
          width: "100%"
        }}
      >
        <nav className="navbar is-transparent" style={{ visibility: "hidden" }}>
          <div className="navbar-brand" style={{ visibility: "visible" }}>
            <div
              className="navbar-burger"
              data-target="navbarExampleTransparentExample"
              onClick={this.toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            id="navbarExampleTransparentExample"
            className={
              this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
            }
            style={{ justifyContent: "center", visibility: "visible" }}
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
        </nav>
      </div>
    );
  }
}
