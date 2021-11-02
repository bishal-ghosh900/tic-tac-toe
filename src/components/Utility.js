import React, { Component } from "react";

export class Utility extends Component {
  render() {
    return (
      <div className="util">
        <a
          href="#"
          className="btn"
          onClick={() => this.props.handlePrev()}
          rel="noopener noreferrer"
        >
          <i className="fas fa-arrow-alt-circle-left"></i>
        </a>
        <a
          href="#"
          onClick={() => this.props.handleReset()}
          className="btn"
          rel="noopener noreferrer"
        >
          <i className="fas fa-redo"></i>
        </a>
        <a
          href="#"
          onClick={() => this.props.prevClicked ? this.props.handleNext() : ""}
          className="btn"
          rel="noopener noreferrer"
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
        </a>
      </div>
    );
  }
}

export default Utility;
