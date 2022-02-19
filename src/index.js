import React from 'react';
import ReactDOM from 'react-dom';
import DarkMode from './DarkMode';
import Profile from './Profile';
import TicTacToe from './TicTacToe';

const puppyName = 'Cody';
const puppyAddress = '123 Puppy St, Chicago, IL 60601';
const emailAddress = 'puppy@puppy.com';
const puppyImg = 'https://place-puppy.com/300x300'

const App = (props) => {
  return <div className="app">
    <div className="profile">
      <Profile
      puppyName = {puppyName}
      puppyAddress = {puppyAddress}
      emailAddress = {emailAddress}
      puppyImage = {puppyImg}/>
    </div>
    <div className="dark-mode">
      <DarkMode/>
    </div>
    <div className="tic-tac-toe">
      <TicTacToe/>
    </div>
    <div className="todo">
      <h1>Todo</h1>
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);