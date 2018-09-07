import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {



	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('[UPDATE Persons.js] Inside shouldComponentUpdate');
	// 	return nextProps.persons !== this.props.persons;
	// } // handled by PureComponent

	componentWillUpdate(nextProps, nextState){
		console.log('[UPDATE Persons.js] Inside componentWillUpdate');
	}
	
	componentDidUpdate(){ 
		console.log('[UPDATE Persons.js] Inside componentDidUpdate');
	}

	render(){
		console.log('[UPDATE Persons.js] Inside render');
		return this.props.persons.map((person, index) => {
	      return <Person
	            name={person.name}
	            age={person.age}
	            delete={() => this.props.delete(index)}  
	            nameChange={(event) => this.props.nameChange(event, person.id)}
	            ageChange={(event) => this.props.ageChange(event, person.id)}
	            click={(event) => this.props.clickFocusHandler(event, person.id)}
	            key={person.id}
	            index={index}
	            />
		});
	}
}

export default Persons;
