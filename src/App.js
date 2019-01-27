import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
    { name : 'Soujanya', company : 'Wipro' },
    { name : 'Swastik', company : 'Verizon' },
    { name : 'Shankar', company : 'Allahabad' }
  ]
  }

  switchNameHandler = () => {
    console.log('Hi');
    this.setState({
      persons: [ 
      { name : 'Soujanya', company : 'Wipro' },
      { name : 'Swastik', company : 'Amazon' },
      { name : 'Shankar', company : 'Allahabad' }
    ]
    });
  }
  render() {
    return (
      <div className="App">
       <h1>Hi!, I'm Swastik</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={ this.state.persons[0].name } company={ this.state.persons[0].company }></Person>
       <Person click={ this.switchNameHandler } name={ this.state.persons[1].name } company={ this.state.persons[1].company }> I love football.</Person>
       <Person name={ this.state.persons[2].name } company={ this.state.persons[2].company }></Person>
      </div>
      
    );
    /* return React.createElement('div', null, 
      React.createElement('h1', {className: 'App' }, 'Hi, I\'m Swastik')
  ); */
  }
}

export default App;
