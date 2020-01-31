import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { Button } from 'reactstrap';


class App extends Component {

    state ={
        persons: [
            {name: 'Jack', age: 21},
            {name: 'James', age: 32},
            {name: 'Jim', age: 25}
        ],
        otherState: 'Some other value'
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Abbie', age: 43},
                {name: 'Ryan', age: 54},
                {name: 'Roger', age: 45}
            ]
        })
    };

    render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working</p>
          <Button color='primary' onClick={this.switchNameHandler}>Switch Name</Button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My hobbies: Racing</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My hobbies: Racing</Person>

      </div>
    );
  }
}

export default App;
