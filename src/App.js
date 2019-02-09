import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';
class App extends Component {
  state = {
    persons: [ 
    { id: 1, name : 'Soujanya', company : 'Wipro' },
    { id: 2, name : 'Swastik', company : 'Verizon' },
    { id: 3, name : 'Shankar', company : 'Allahabad' }
  ]
  }

  switchNameHandler = (newName) => {
    console.log('Hi');
    this.setState({
      persons: [ 
      { id: 1, name : newName, company : 'Wipro' },
      { id: 2, name : 'Swastik', company : 'Amazon' },
      { id: 3, name : 'Shankar', company : 'Allahabad' }
    ]
    });
  }

  nameChangeHandler = (event, person) => {
    const personIndex = this.state.persons.findIndex( p => p.id === person.id);
    console.log(personIndex);
    const updatedPerson = {...this.state.persons[personIndex]};
    updatedPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = updatedPerson;
    console.log(persons);
    this.setState({
      persons: persons,
    showPersons: true
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
            return <Person click={this.deletePersonHandler} changed = {(event) => this.nameChangeHandler(event, person)} 
              key= {person.id} name = {person.name} company = { person.company}/>
          }
          )
          /* <Person name={ this.state.persons[0].name } company={ this.state.persons[0].company }></Person>
        <Person changed= {this.nameChangeHandler} click={ this.switchNameHandler.bind(this, 'Soujanya') } name={ this.state.persons[1].name } company={ this.state.persons[1].company }> I love football.</Person>
        <Person name={ this.state.persons[2].name } company={ this.state.persons[2].company }></Person> */
        
          }
       
       </div> : null
      }
      {
        this.state.showPersons === true ?
          style.backgroundColor= 'red' : style.backgroundColor = 'green'
        
      }
      </div>
      
    );
    /* return React.createElement('div', null, 
      React.createElement('h1', {className: 'App' }, 'Hi, I\'m Swastik')
  ); */
  }
}

export default Radium(App);
