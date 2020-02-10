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

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Finn', age: 43},
                {name: event.target.value, age: 54},
                {name: 'Roger', age: 45}
            ]
        })
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
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
        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm react app</h1>
                <p>This is really working</p>
                <Button style={style} onClick={this.togglePersonHandler}>Switch Name</Button>
                {persons}
            </div>
        );
    }
}

export default App;
