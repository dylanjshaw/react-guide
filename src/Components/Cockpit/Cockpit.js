import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../Components/HOC/Aux'
// import {AuthContext} from '../../../Containers/App'

const Cockpit = (props) => {

    const assignedClasses = {
      toggle: [],
      switch: [],
      clear: []
    };

    if(props.arePersons){
      props.showPersons ? assignedClasses.toggle.push('red') : assignedClasses.toggle.push('green');
      assignedClasses.switch.push('green');
      assignedClasses.clear.push('green');
    }

    // cast assigned classes to strings
    for(var i in assignedClasses){
      assignedClasses[i] = assignedClasses[i].join(' ');
    }


  return (
      <Aux>
        <h1>Dylan's Sandbox</h1>
        <button className={classes.btn} onClick={props.login}>Log In</button>
        <br /><br />
        <br /><br />
        <button
          className={classes[assignedClasses.switch] + ' ' + classes.btn} 
          onClick={props.switch.bind(this, 'Devin', '27', 1)}
          disabled={!props.arePersons}
          >Switch Person 1 to Devin</button>
        <button 
          className={classes[assignedClasses.switch]  + ' ' + classes.btn} 
          onClick={ () => props.switch('Nick', '25', 2)}
          disabled={!props.arePersons}
          >Switch Person 2 to Nick</button>
        <button 
          className={classes[assignedClasses.clear]  + ' ' + classes.btn}
          onClick={props.clear}
          disabled={!props.arePersons}
          >Clear Persons</button>
        <br /><br />
        <br /><br />
        <button 
          className={classes.BigButton + ' ' + classes[assignedClasses.toggle] + ' ' + classes.btn}
          onClick={props.toggle}
          disabled={!props.arePersons}
          >Toggle Persons</button>
        <button
          className={classes.BigButton + ' ' + classes.green + ' ' + classes.btn}
          onClick={props.add.bind(this)}
          disabled={!props.showPersons}
        >Add Person</button> 
        <p>[Persons: {props.numPersons}]</p>
    </Aux>
  );
}


export default Cockpit;