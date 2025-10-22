import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const styles = {
  width: "1500px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // if user clicked an occupied square or game is won, return
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <>
      <div className="game-container">
        <Board squares={board} onClick={handleClick} />
        <div className="winner">
          <p>
            {winner
              ? "Winner is: " + winner
              : "Next Player: " + (xIsNext ? "X" : "O")}
          </p>
          {renderMoves()}
        </div>
      </div>
    </>
  );
};
export default Game;
