import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';

const person = (props) => {
    return (
        <div className={classes.Person}>
        <p>I'm a Person and I'm { Math.floor(Math.random() * 30) } years old.</p>
        <p onClick={props.click}>My name is { props.name } and I work in { props.company }.</p>
        <p>{ props.children }</p>
        <input onChange={props.changed} value={props.name} type="text"/>
        </div>
    );
}

export default person;