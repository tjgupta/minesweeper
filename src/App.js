import React, { Component } from 'react';
import './App.css';
import GridRow from './GridRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: 9,
      board: this.buildBoard(9, 10)
    };
  }

  buildBoard(boardSize, numberBombs) {
    let row = new Array(boardSize).fill({ bomb: false });
    let board = new Array(boardSize).fill(row);

    // add bombs
    for (let i = 0; i < numberBombs; i++) {}

    return board;
  }

  render() {
    const rows = this.state.board.map((row) => {
      return <GridRow row={row} />;
    });

    return (
      <div className="container">
        <header className="header">
          <h1 className="title">Minesweeper</h1>
        </header>
        <div className="grid-container">{rows}</div>
      </div>
    );
  }
}

export default App;
