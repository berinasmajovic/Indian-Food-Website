import React, { Component } from "react";

export default class TitleContainer extends Component {
  render() {
    return (
      <div className="container" style={{width: "60%", paddingTop: 150}}>
        <h2 style={{fontFamily: "Libre Caslon Text", fontSize: "80px", fontWeight: 700, color: "white", textAlign: "center"}}>Best Indian Food in Västerås</h2>
      </div>
    );
  }
}
