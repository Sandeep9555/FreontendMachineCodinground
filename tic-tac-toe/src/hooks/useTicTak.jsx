import React, { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const useTicTak = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setXNext] = useState(true);

  const Winning_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < Winning_patterns.length; i++) {
      const [x, y, z] = Winning_patterns[i];
      if (
        currentBoard[x] &&
        currentBoard[x] === currentBoard[y] 
        &&
        currentBoard[x] === currentBoard[z]
      ) {
        return currentBoard[x];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setXNext(!isXNext);
  };
  const getStatusMsg = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} wins`;
    }
    if (!board.includes(null)) {
      return "Its A draw";
    }
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard());
    setXNext(true);
  };
  return { board, handleClick, calculateWinner, getStatusMsg, resetGame };
};

export default useTicTak;
