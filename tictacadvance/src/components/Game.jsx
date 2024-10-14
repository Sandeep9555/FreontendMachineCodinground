import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [boardSize, setBoardSize] = useState(3);

  // Handle the board size input change
  const handleSizeChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 3) {
      setBoardSize(value);
    }
  };

  return (
    <div className="game">
      <div className="board-size">
        <label>Board Size: </label>
        <input
          className="board-size-input"
          type="number"
          value={boardSize}
          min="3"
          onChange={handleSizeChange}
        />
      </div>
      <div className="board">
        <Board boardSize={boardSize} />
      </div>
    </div>
  );
};

export default Game;
