import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import {Button} from 'reactstrap';


class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Jack', age: 21},
            {id: '2', name: 'James', age: 32},
            {id: '3', name: 'Jim', age: 25}
        ],
        otherState: 'Some other value',
        showPerson: false
    };

    nameChangeHandler = (event, id) => {
        const  personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    };

    deletePersonHandler = (personIndex) => {
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
            backgroundColor: 'green',
            color: 'white',
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
                            age={person.age}
                            key={person.id}
                            changed={(event) =>this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );
            style.backgroundColor = 'red'; 
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
