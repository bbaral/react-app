import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working</p>
          <Person name='Jack' age='29' />
      </div>
    );
  }
}

export default App;
