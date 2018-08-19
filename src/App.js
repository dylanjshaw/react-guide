import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';



class App extends Component {
  
  state = {
    persons: [
      {id: 'abc', name: '', age: '25'},
      {id: 'def', name: '', age: '25'}
    ],
    showPersons: true
  }

  switchHandler = (newName, newAge, id) => {
    const personIndex = this.state.persons.findIndex(person => {return person.id === id;});
    const person = {...this.state.persons[personIndex]}
    person.name = newName;
    person.age = newAge;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }


  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {return person.id === id;});
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  deletePersonHandler = (index) => {
    // let persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1) 
    this.setState({
      persons: persons
    })
  }

  toggleDivHandler = () => {
    const toggleState = this.state.showPersons;
    this.setState({showPersons: !toggleState})
  }


  render() {

    const style = {
      backgroundColor: 'black',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'red'
      // }
    }


    let persons = null;
    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  delete={() => this.deletePersonHandler(index)}  
                  change={(event) => this.changeHandler(event, person.id)}
                  key={person.id} />
              )
            })}
          </div>  
      )
    } else {
      // style[':hover'].backgroundColor = 'green';
    }


    return (
      // <StyleRoot>
      <div className="App"> 
        <h1>Dylan's Sandbox</h1>
        <button onClick={this.switchHandler.bind(this, 'Devin', '27', 'abc')}>Switch Person 1 to Devin</button>
        <button onClick={ () => this.switchHandler('Nick', '25', 'def')}>Switch Person 2 to Nick</button>
        <br /><br />
        {persons}
        <br /><br />
        <button style={style} onClick={this.toggleDivHandler}>Toggle div</button>
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;

 