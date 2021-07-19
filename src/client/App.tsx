import React, { useState, useEffect } from 'react';
// Components
import Board from "./components/Board";
// Styles
import { Wrapper } from './App.styles';

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares: string[] = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const handleWinner = () => {
    const payload = history[stepNumber];
    fetch('api/winner', {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => setWinner(json.status)).catch(err => console.log(err))
  }

  useEffect(() => {
    handleWinner()
  }, [history]);


  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const handleDraw = (): boolean => {
    const squares = history[stepNumber];
    let steppedSquares = 0;

    squares.forEach(square => {
      if (square !== null) 
        steppedSquares += 1;
    })
    
    return steppedSquares === 9;
  }

  return (
    <Wrapper>
      <h1>Tic Tac Toe By Shaun Li</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <button className='restart-game' onClick={() => jumpTo(0)}>Restart Game</button> 
        </div>
        <h3>{winner ? "Winner: " + winner : handleDraw()? "Draw" : "Next Player: " + xO}</h3>
      </div>
    </Wrapper>
  );
};

export default App;
