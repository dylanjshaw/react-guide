import React from 'react';
import classes from './Person.css';
// import Radium, {StyleRoot} from 'radium';

const person = (props) => {

	return (
		<div className={classes.Person}>
			<p> My name is {props.name} and I'm {props.age} years old.</p>
			<button type='submit' onClick={props.delete}>X</button>
			<span>Name:</span><input id='name' type='text' onChange={props.nameChange} value={props.name}/>
			<span>Age:</span><input id='age' type='text' onChange={props.ageChange} value={props.age}/>
		</div>
	)	
}

// export default Radium(person);
export default person;

