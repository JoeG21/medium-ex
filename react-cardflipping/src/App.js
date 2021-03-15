import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card />
        </header>
      </div>
    );
  }
}

export default App;
