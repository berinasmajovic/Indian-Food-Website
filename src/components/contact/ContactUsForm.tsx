import React, { Component } from "react";
import ActionButton from "../base/ActionButton";
import InfoBox from "../info/InfoBox";

export default class ContactUsForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="hero-body has-text-primary-light">
            <div className="container has-text-centered">
              <div
                className="columns is-variable has-background-black-ter"
                style={{ padding: "5%" }}
              >
                <div className="column has-text-left">
                  <div className="column">
                    <p className="is-size-7">CONTACT US</p>
                    <h1
                      className="is-size-3 has-text-warning"
                      style={{ fontFamily: "Libre Caslon Text" }}
                    >
                      Get in touch!
                    </h1>
                    <p className="is-size-6">
                      Fill in a form and contact us at any time.
                    </p>
                    <p className="is-size-6">
                      Our support team is always there for you!👋
                    </p>
                    <br></br>
                    <div className="columns is-vcentered">
                      <InfoBox
                        icon={"fas fa-location-dot has-text-light"}
                        content={
                          <span>
                            Drabantvägen 4, 194 33
                            <br></br>
                            Upplands Väsby, Sverige
                          </span>
                        }
                        label={"ADRESS"}
                      />
                    </div>

                    <div className="columns is-vcentered">
                      <InfoBox
                        icon={"fas fa-phone has-text-light"}
                        content={<span>076 027 41 51</span>}
                      />
                    </div>
                  </div>
                </div>
                <div className="column has-text-left">
                  <div className="field">
                    <label className="label"></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Full Name"
                        style={{ fontSize: "15px" }}
                      ></input>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label"></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="email"
                        placeholder="Email Adress"
                        style={{ fontSize: "15px" }}
                      ></input>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label"></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Subject"
                        style={{ fontSize: "15px" }}
                      ></input>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label"></label>
                    <div className="control">
                      <textarea
                        className="textarea is-medium"
                        placeholder="Message"
                        style={{ fontSize: "15px" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="control">
                    <ActionButton
                      label={"SUBMIT MESSAGE"}
                      style={{ width: "100%", fontFamily: "Arial" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
