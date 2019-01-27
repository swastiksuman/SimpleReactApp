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

  switchNameHandler = (newName) => {
    console.log('Hi');
    this.setState({
      persons: [ 
      { name : newName, company : 'Wipro' },
      { name : 'Swastik', company : 'Amazon' },
      { name : 'Shankar', company : 'Allahabad' }
    ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [ 
      { name : 'Soujanya', company : 'Wipro' },
      { name : event.target.value, company : 'Amazon' },
      { name : 'Shankar', company : 'Allahabad' }
    ],
    showPersons: false
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
       <h1>Hi!, I'm Swastik</h1>
       <button style={style} onClick={this.togglePersonHandler}>{ this.showPersons ? 'Hide': 'Show'}</button>
       {
         this.state.showPersons === true ?
        <div>
        {
          this.state.persons.map(person => {
            return <Person name = {person.name} company = { person.company}/>
          }
        )
          /* <Person name={ this.state.persons[0].name } company={ this.state.persons[0].company }></Person>
        <Person changed= {this.nameChangeHandler} click={ this.switchNameHandler.bind(this, 'Soujanya') } name={ this.state.persons[1].name } company={ this.state.persons[1].company }> I love football.</Person>
        <Person name={ this.state.persons[2].name } company={ this.state.persons[2].company }></Person> */
       }
       </div> : null
      }
      </div>
      
    );
    /* return React.createElement('div', null, 
      React.createElement('h1', {className: 'App' }, 'Hi, I\'m Swastik')
  ); */
  }
}

export default App;
