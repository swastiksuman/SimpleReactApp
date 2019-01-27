import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi!, I'm Swastik</h1>
       <Person></Person>
      </div>
      
    );
    /* return React.createElement('div', null, 
      React.createElement('h1', {className: 'App' }, 'Hi, I\'m Swastik')
  ); */
  }
}

export default App;
