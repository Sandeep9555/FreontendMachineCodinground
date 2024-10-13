import React, { useState } from "react";
import useTicTak from "../hooks/useTicTak";

const Tictac = () => {
  const { board, resetGame, calculateWinner, getStatusMsg, handleClick } =
    useTicTak();
  return (
    <div className="main">
      <div className="main-info">
        {getStatusMsg()}
        <button className="reset-button" onClick={resetGame}>
          ResetGame
        </button>
      </div>
      <div className="main-board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              onClick={() => handleClick(index)}
              key={index}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tictac;
