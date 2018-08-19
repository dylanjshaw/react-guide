import React from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {

    const assignedClasses = {
      toggle: [],
      switch: []
    };

    if(props.arePersons){
      props.showPersons ? assignedClasses.toggle.push('red') : assignedClasses.toggle.push('green');
      assignedClasses.switch.push('green');
    }

    // cast assigned classes to strings
    for(var i in assignedClasses){
      assignedClasses[i] = assignedClasses[i].join(' ');
    }


  return (
      <div className={classes.Cockpit}>
        <h1>Dylan's Sandbox</h1>
        <button 
          className={classes[assignedClasses.switch]} 
          onClick={props.switch.bind(this, 'Devin', '27', 1)}
          disabled={!props.arePersons}
          >Switch Person 1 to Devin</button>
        <button 
          className={classes[assignedClasses.switch]} 
          onClick={ () => props.switch('Nick', '25', 2)}
          disabled={!props.arePersons}
          >Switch Person 2 to Nick</button>
        <br /><br />
        {props.persons}
        <br /><br />
        <button 
          className={classes.BigButton + ' ' + classes[assignedClasses.toggle]}
          onClick={props.toggle}
          disabled={!props.arePersons}
          >Toggle Persons</button>
        <button
          className={classes.BigButton + ' ' + classes.green}
          onClick={props.add.bind(this)}
        >Add Person</button>
      </div>
  );
}


export default Cockpit;