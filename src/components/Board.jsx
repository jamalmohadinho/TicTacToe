import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="container">
      <h1 className="h1">Welcome to My Tic Tac Toe Game</h1>
      <div className="board">
        {squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => onClick(i)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
