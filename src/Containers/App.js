import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import PersonList from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
// import Radium, {StyleRoot} from 'radium';
// import ErrorHandler from './ErrorHandler/ErrorHandler';

document.body.style.backgroundColor = "lightgreen";

class App extends Component {
  
  state = {
    persons: [
      {id: 1, name: '', age: ''},
      {id: 2, name: '', age: ''}
    ],
    showPersons: true,
    arePersons: true
  }

  switchHandler = (newName, newAge, id) => {
    const personIndex = this.state.persons.findIndex(person => {return person.id === id;});
    const person = {...this.state.persons[personIndex]};
    person.name = newName;
    person.age = newAge;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }


  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {return person.id === id;});
    const person = {...this.state.persons[personIndex]};
    person[event.target.id] = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }
 
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1); 
    const arePersons = (persons.length) ? true : false;
    this.setState({
      persons: persons,
      arePersons: arePersons
    });
  }

  addPersonHandler = () => {
    const persons = [...this.state.persons];
    const highestExistingIdValue = Math.max.apply(Math, persons.map(function(o) { return o.id; }));
    const newPersonId = highestExistingIdValue + 1;
    const newPerson = {id:  newPersonId, name: '', age: ''};
    persons.push(newPerson);
    this.setState({persons: persons});
  }

  toggleDivHandler = () => {
    const toggleState = this.state.showPersons;
    this.setState({showPersons: !toggleState});
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////


  render() {


    // generate person list
    let persons = null;
    if(this.state.showPersons){
      persons = <PersonList
              persons={this.state.persons}
              delete={this.deletePersonHandler}
              nameChange={this.changeHandler}
              ageChange={this.changeHandler}
            />
    }
    

    return (
      <Cockpit
        persons={persons}
        arePersons={this.state.arePersons}
        showPersons={this.state.showPersons}
        switch={this.switchHandler}
        add={this.addPersonHandler}
        toggle={this.toggleDivHandler}
      />
    );
  }
}

export default App;

 