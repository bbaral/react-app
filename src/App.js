import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import {Button} from 'reactstrap';


class App extends Component {

    state = {
        persons: [
            {name: 'Jack', age: 21},
            {name: 'James', age: 32},
            {name: 'Jim', age: 25}
        ],
        otherState: 'Some other value',
        showPerson: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 43},
                {name: 'Ryan', age: 54},
                {name: 'Roger', age: 45}
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Finn', age: 43},
                {name: event.target.value, age: 54},
                {name: 'Roger', age: 45}
            ]
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            color: 'black',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, I'm react app</h1>
                <p>This is really working</p>
                <Button style={style} onClick={this.togglePersonHandler}>Switch Name</Button>
                {
                    this.state.showPerson === true ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}>
                            My hobbies: Racing
                        </Person>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'Arthur')}
                            changed={this.nameChangeHandler}>
                            My hobbies: Racing
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}>
                            My hobbies: Racing
                        </Person>
                    </div> : null
                }

            </div>
        );
    }
}

export default App;
