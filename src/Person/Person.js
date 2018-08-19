import React from 'react';
import './Person.css';
// import Radium, {StyleRoot} from 'radium';

const person = (props) => {
	const style = {
		// '@media (min-width: 500px)':{
		// 	width: '450px'
		// }
	}
	return (
		<div className='Person' >
			<p> My name is {props.name} and I'm {props.age} years old.</p>
			<p>{props.children}</p> 
			<input type='text' onChange={props.change} value={props.name}/>
			<button type='submit' onClick={props.delete}>X</button>
		</div>
	)	
}

// export default Radium(person);
export default person;