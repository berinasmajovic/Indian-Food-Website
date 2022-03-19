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
     
        <nav className="level" style={{width: "100%", position: "absolute"}}>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>HOME</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>GALLERY</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>RESTAURANTS</a>
          </p>
          <p className="level-item has-text-centered">
            <img
              src={logo}
              height={100}
              width={100}
              style={{ margin: "15px 100px" }}
            />
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>HISTORY</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>ABOUT US</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>CONTACT</a>
          </p>
        </nav>
    );
  }
}
