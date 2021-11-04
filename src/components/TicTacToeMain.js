import React, { Component } from "react";
import Players from "./Players";
import TicTacToeBox from "./TicTacToeBox";
import Utility from "./Utility";

export class TicTacToeMain extends Component {
  render() {
    const  {
        index,
        draw,
        playerA,
        playerB,
        circleOrCross, 
        boxState,
        prevClicked,
        handleClick,
        handleReset,
        handlePrev,
        handleNext,
    } = this.props;
    return (
      <>
        <Players
          index={index}
          draw={draw}
          playerA={playerA}
          playerB={playerB}
          circleOrCross={circleOrCross}
        />
        <Utility
          prevClicked={prevClicked}
          handleReset={handleReset}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
        <TicTacToeBox
          boxState={boxState}
          index={index}
          handleClick={handleClick}
        />
      </>
    );
  }
}

export default TicTacToeMain;
