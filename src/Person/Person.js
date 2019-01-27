import React from 'react';

const person = (props) => {
    
    return (
        <div>
        <p>I'm a Person and I'm { Math.floor(Math.random() * 30) } years old.</p>
        <p onClick={props.click}>My name is { props.name } and I work in { props.company }.</p>
        <p>{ props.children }</p>
        <input onChange={props.changed} type="text"/>
        </div>
    );
}

export default person;