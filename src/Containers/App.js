import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import PersonList from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
// import Radium, {StyleRoot} from 'radium';
// import ErrorHandler from './ErrorHandler/ErrorHandler';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      persons: [
        {id: 1, name: '', age: ''},
        {id: 2, name: '', age: ''}
      ],
      showPersons: true,
      arePersons: true,
      personCounter: 2,
      authenticated: false
    }
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // shouldComponentUpdate(){} // handled by PureComponent
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  static getDerivedStateFromProps(nextProps, prevState){ 
    return prevState
  }

  getSnapshotBeforeUpdate(){}
  

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
    // this.setState({persons: persons, arePersons: true});
    this.setState((prevState, props) => {
      return {
        persons: persons,
        arePersons: true,
        personCounter: prevState.personCounter + 1
      }
    })
  }

  clearPersonsHandler = () => {
    const persons = [...this.state.persons];
    persons.map((person) => {
      person.name = '';
      person.age = '';
    });
    this.setState({persons: persons})
  }

  clickFocusHandler = (event, id) => {
    alert(event)
  }

  toggleDivHandler = () => {
    const toggleState = this.state.showPersons;
    this.setState({showPersons: !toggleState});
  }

  loginHandler = () => {
    this.setState({"authenticated":true})
  }  

  logoutHandler = () => {
    this.setState({"authenticated":false})
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////


  render() {

    document.body.style.backgroundColor = this.state.authenticated ? 'springgreen' : 'indianred';

    console.log('[UPDATE App.js] Inside render')

    // generate person list
    let persons = null;
    if(this.state.showPersons){
      persons = <PersonList
              persons={this.state.persons}
              delete={this.deletePersonHandler}
              nameChange={this.changeHandler}
              ageChange={this.changeHandler}
              click={this.clickFocusHandler}
            />
    }

    
    return (
      <div className={classes.App}>
        <Cockpit
        //render person list
          arePersons={this.state.arePersons}
          showPersons={this.state.showPersons}
          numPersons={this.state.personCounter}
          switch={this.switchHandler}
          add={this.addPersonHandler}
          toggle={this.toggleDivHandler}
          clear={this.clearPersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        <button className={classes.btn} onClick={this.logoutHandler}>Log Out</button>
      </div>
    );
  }
}

export default App;

 