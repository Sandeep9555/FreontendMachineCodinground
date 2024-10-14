import React, { useState } from "react";
import Square from "./Square";

const Board = ({ boardSize }) => {
  const [squares, setSquares] = useState(
    Array(boardSize * boardSize).fill(null)
  );
  const [xIsNext, setXNext] = useState(true);

  // Function to calculate the winner
  const calculateWinner = (squares, boardSize) => {
    const lines = [];

    // Rows and columns
    for (let i = 0; i < boardSize; i++) {
      const row = [],
        col = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(i * boardSize + j);
        col.push(j * boardSize + i);
      }
      lines.push(row, col);
    }

    // Diagonals
    const diag1 = [],
      diag2 = [];
    for (let i = 0; i < boardSize; i++) {
      diag1.push(i * boardSize + i);
      diag2.push(i * boardSize + (boardSize - i - 1));
    }
    lines.push(diag1, diag2);

    // Check all winning lines
    for (const line of lines) {
      const [a, ...rest] = line;
      if (squares[a] && rest.every((index) => squares[a] === squares[index])) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null;
  };

  // Handle square click
  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares, boardSize) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? "X" : "O"; // Corrected assignment here
    setSquares(newSquares);
    setXNext(!xIsNext); // Toggle between X and O
  };

  // Render a single square
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

  // Render the entire board
  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < boardSize; row++) {
      const rowSquares = [];
      for (let col = 0; col < boardSize; col++) {
        rowSquares.push(renderSquare(row * boardSize + col));
      }
      board.push(
        <div className="board-row" key={row}>
          {rowSquares}
        </div>
      );
    }
    return board;
  };

  const winner = calculateWinner(squares, boardSize);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      {renderBoard()}
    </div>
  );
};

export default Board;
