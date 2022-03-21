/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import LogoImage from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Navbar.css";

export default class Navbar extends Component<{}, { isActive: boolean }> {
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
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ background: "rgba(76, 175, 80, 0)" }}
      >
        <div className="navbar-brand" style={{backgroundColor: "black", color: "white"}}>
          <a
            onClick={() => {
              this.toggleNav();
            }}
            role="button"
            className={`navbar-burger burger ${
              this.state.isActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}
          style={{ justifyContent: "center" }}
        >
          <div className="columns is-vcentered">
          <p className="has-text-centered">
            <a className="link is-info" style={navbarItemStyle}>
              HOME
            </a>
          </p>
          <p className="has-text-centered">
            <Link
              to="#gallery"
              className="link is-info"
              style={navbarItemStyle}
            >
              GALLERY
            </Link>
          </p>
          <p className="has-text-centered">
            <Link
              to="#locations"
              className="link is-info"
              style={navbarItemStyle}
            >
              RESTAURANTS
            </Link>
          </p>
          <p className="has-text-centered">
            <img
              src={LogoImage}
              height={100}
              width={100}
              style={{ margin: "15px 100px" }}
            />
          </p>
          <p className="has-text-centered">
            <Link
              to="#history"
              className="link is-info"
              style={navbarItemStyle}
            >
              HISTORY
            </Link>
          </p>
          <p className="has-text-centered">
            <Link
              to="#aboutUs"
              className="link is-info"
              style={navbarItemStyle}
            >
              ABOUT US
            </Link>
          </p>
          <p className="has-text-centered" style={{marginBottom: "1rem"}}>
            <Link
              to="#contact"
              className="link is-info"
              style={navbarItemStyle}
            >
              CONTACT
            </Link>
          </p>
          </div>
         
        </div>
      </nav>
    );
  }
}
