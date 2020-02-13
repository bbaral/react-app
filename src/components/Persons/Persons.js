import React, {Component} from 'react';
import Person from "./Person/Person";

const persons = (prop) => prop.persons.map( ( person, index ) => {
        return <Person
                click={() => this.deletePersonHandler( index )}
                name={person.name}
                age={person.age}
                changed={( event ) => this.nameChangedHandler( event, person.id )} />
    });
