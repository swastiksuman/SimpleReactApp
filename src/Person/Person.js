import React from 'react';
import './Person.css';
//import Radium from 'radium';

const person = (props) => {
    return (
        <div className="Person" style={mediastyle}>
        <p>I'm a Person and I'm { Math.floor(Math.random() * 30) } years old.</p>
        <p onClick={props.click}>My name is { props.name } and I work in { props.company }.</p>
        <p>{ props.children }</p>
        <input style={style} onChange={props.changed} value={props.name} type="text"/>
        </div>
    );
}

export default person;