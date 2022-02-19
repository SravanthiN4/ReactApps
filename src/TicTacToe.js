import React from 'react';
import './TicTacToe.css';

const board = [
  'x', null, 'o', 
  'o', 'x', null,
  'x', 'o', null
];

const TicTacToe = () => {
  return (
<div className="board">{
    board.map((item, index) => {
      return <h3 className = "cell" key={ index }>{ item }</h3>
    })
  }</div>
  )
}

export default TicTacToe;