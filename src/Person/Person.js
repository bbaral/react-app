import React from 'react';

const person = (props) => {
    return  (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old</p>
            <h4>{props.children}</h4>
        </div>
    )
};

export default person;
