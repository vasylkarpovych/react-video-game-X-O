import React, { useState } from "react";
import "./Game.css";
import Board from "./Board";
import { calculateWinner } from "../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    // визначити був лі клік по ячєйці або гра закінчилась
    if (winner || boardCopy[index]) return;

    // визначити чий буде хід, що зараз ставимо, Х чи О
    boardCopy[index] = xIsNext ? "X" : "O";

    // обновити наш стейт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Почату гру заново
      </button>
    );
  };

  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="game__info">
        {winner
          ? "Переможець " + winner
          : "Зараз ходить " + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
};

export default Game;
