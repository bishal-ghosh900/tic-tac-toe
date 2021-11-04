import React, { Component } from "react";
import TicTacToeMain from "./TicTacToeMain";


export class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winComplete: [false],
      draw: [false],
      playerA: [false],
      playerB: [false],
      circleOrCross: [false],
      prevClicked: false,
      index: 0,
      boxState: [
        [
          {
            box: "one",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "two",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "three",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "four",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "five",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "six",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "seven",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "eight",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
          {
            box: "nine",
            circle: false,
            cross: false,
            clicked: false,
            innerText: "",
          },
        ],
      ],
    };
  }

  handleReset = () => {
    const upperBoxState = [...this.state.boxState];

    for (let i = upperBoxState.length - 1; i >= 1; i--) {
      upperBoxState.pop();
    }

    this.setState({
      boxState: upperBoxState,
      winComplete: [false],
      draw: [false],
      playerA: [false],
      playerB: [false],
      circleOrCross: [false],
      index: 0,
      prevClicked: false,
    });
  };

  handlePrev = () => {
    let { index } = this.state;
    if (index > 0) {
      this.setState({
        index: --index,
        prevClicked: true,
      });
    }
  };

  handleNext = () => {
    let { index, boxState } = this.state;
    if (index + 1 < boxState.length) {
      index += 1;
    }
    this.setState({ index });
  };

  handleClick = (e) => {
    let { index } = this.state;
    if (this.state.winComplete[index]) return;
    let attr = e.target.getAttribute("name");
    const upperBoxState = [...this.state.boxState];
    const boxState = [...upperBoxState[index]];
    const obj = { ...boxState.find((v) => v.box === attr) };

    if (obj.circle || obj.cross) {
      return;
    } else {
      obj.clicked = true;
    }
    if (this.state.circleOrCross[index]) {
      obj.circle = true;
      obj.innerText = "O";
    } else {
      obj.cross = true;
      obj.innerText = "X";
    }
    for (let i = 0; i < boxState.length; i++) {
      if (boxState[i].box === attr) {
        boxState[i] = { ...obj };
        break;
      }
    }
    if (upperBoxState.length - 1 < index + 1) {
      upperBoxState.push(boxState);
    } else {
      upperBoxState[index + 1] = boxState;
      while (upperBoxState.length - 1 > index + 1) {
        upperBoxState.pop();
      }
    }

    let result = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < boxState.length; i++) {
      if (boxState[i].circle) {
        result[i] = "circle";
      } else if (boxState[i].cross) {
        result[i] = "cross";
      }
    }

    let winComplete = false;
    let playerA = false;
    let playerB = false;
    let draw = false;
    let circleOrCross = this.state.circleOrCross[index];
    let count = 0;

    if (
      result[0] === "cross" &&
      result[1] === "cross" &&
      result[2] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[3] === "cross" &&
      result[4] === "cross" &&
      result[5] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[6] === "cross" &&
      result[7] === "cross" &&
      result[8] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[0] === "cross" &&
      result[3] === "cross" &&
      result[6] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[1] === "cross" &&
      result[4] === "cross" &&
      result[7] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[2] === "cross" &&
      result[5] === "cross" &&
      result[8] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[0] === "cross" &&
      result[4] === "cross" &&
      result[8] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }
    if (
      result[2] === "cross" &&
      result[4] === "cross" &&
      result[6] === "cross"
    ) {
      winComplete = true;
      playerA = true;
    }

    if (
      result[0] === "circle" &&
      result[1] === "circle" &&
      result[2] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[3] === "circle" &&
      result[4] === "circle" &&
      result[5] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[6] === "circle" &&
      result[7] === "circle" &&
      result[8] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[0] === "circle" &&
      result[3] === "circle" &&
      result[6] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[1] === "circle" &&
      result[4] === "circle" &&
      result[7] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[2] === "circle" &&
      result[5] === "circle" &&
      result[8] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[0] === "circle" &&
      result[4] === "circle" &&
      result[8] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }
    if (
      result[2] === "circle" &&
      result[4] === "circle" &&
      result[6] === "circle"
    ) {
      winComplete = true;
      playerB = true;
    }

    if (!winComplete) {
      for (let v of result) {
        if (v) {
          count++;
        }
      }
    }
    if (count === result.length && !winComplete) {
      draw = true;
    }

    let winCompleteArr = [...this.state.winComplete];
    let drawArr = [...this.state.draw];
    let playerAArr = [...this.state.playerA];
    let playerBArr = [...this.state.playerB];
    let circleOrCrossArr = [...this.state.circleOrCross];
    index += 1;

    if (winCompleteArr.length - 1 < index) {
      winCompleteArr.push(winComplete);
    } else {
      winCompleteArr[index] = winComplete;
      while (winCompleteArr.length - 1 > index) {
        winCompleteArr.pop();
      }
    }

    if (drawArr.length - 1 < index) {
      drawArr.push(draw);
    } else {
      drawArr[index] = draw;
      while (drawArr.length - 1 > index) {
        drawArr.pop();
      }
    }

    if (playerAArr.length - 1 < index) {
      playerAArr.push(playerA);
    } else {
      playerAArr[index] = playerA;
      while (playerAArr.length - 1 > index) {
        playerAArr.pop();
      }
    }

    if (playerBArr.length - 1 < index) {
      playerBArr.push(playerB);
    } else {
      playerBArr[index] = playerB;
      while (playerBArr.length - 1 > index) {
        playerBArr.pop();
      }
    }

    if (circleOrCrossArr.length - 1 > index) {
      circleOrCrossArr.push(!circleOrCross);
    } else {
      circleOrCrossArr[index] = !circleOrCross;
      while (circleOrCrossArr.length - 1 < index) {
        circleOrCrossArr.pop();
      }
    }

    this.setState({
      winComplete: winCompleteArr,
      draw: drawArr,
      playerA: playerAArr,
      playerB: playerBArr,
      boxState: upperBoxState,
      circleOrCross: circleOrCrossArr,
      index: index,
      prevClicked: false,
    });
  };
  render() {

    return (
      <div className="wrapper">
        <TicTacToeMain {...this.state}
          handleReset={this.handleReset} 
          handlePrev={this.handlePrev} 
          handleNext={this.handleNext} 
          handleClick={this.handleClick} 
        />
      </div>
    );
  }
}

export default TicTacToe;
