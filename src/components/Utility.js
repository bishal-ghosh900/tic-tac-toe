import React, { Component } from "react";

export class Utility extends Component {
  render() {
    return (
      <div className="util">
        <button
          href="#id"
          className="btn"
          onClick={() => this.props.handlePrev()}
          rel="noopener noreferrer"
        >
          <i className="fas fa-arrow-alt-circle-left"></i>
        </button>
        <button
          href="#id"
          onClick={() => this.props.handleReset()}
          className="btn"
          rel="noopener noreferrer"
        >
          <i className="fas fa-redo"></i>
        </button>
        <button
          href="#id"
          onClick={() => this.props.prevClicked ? this.props.handleNext() : ""}
          className="btn"
          rel="noopener noreferrer"
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    );
  }
}

export default Utility;
