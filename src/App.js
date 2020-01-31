import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working</p>
          <button>Switch Name</button>
          <Person name='Jack' age='29' >My hobbies: Racing</Person>
          <Person name='Joe' age='23' >
              <h1>Hello</h1>
          </Person>
      </div>
    );
  }
}

export default App;
