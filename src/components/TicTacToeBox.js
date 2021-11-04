import React, { Component } from "react";

export class TicTacToeBox extends Component {
  render() {
    let { boxState, index,  handleClick} = this.props;
    return (
      <div className="tictactoe">
        {boxState[index].map((e) => {
          return (
            <div
              key={e.box}
              name={e.box}
              onClick={handleClick}
              className={`box ${e.box}`}
            >
              {e.innerText}
            </div>
          );
        })}
      </div>
    );
  }
}

export default TicTacToeBox;
