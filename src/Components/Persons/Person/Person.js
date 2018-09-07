import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../Containers/App'



class Person extends Component {
	constructor(props) {
		super(props)
		this.inputElement = React.createRef();
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('[UPDATE Person.js] Inside shouldComponentUpdate');
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		console.log('[UPDATE Person.js] Inside componentWillUpdate');
	}
	
	componentDidUpdate(){
		console.log('[UPDATE Person.js] Inside componentDidUpdate');
	}	

	componentDidMount(){
		console.log('[UPDATE Person.js] Inside componentDidUpdate');
		if(this.props.index == 0)this.inputElement.current.focus();
	}

	render(){
		console.log('[UPDATE Person.js] Inside render');
		return (
			<div className={classes.Person}>
				<AuthContext.Consumer>
					{ auth => auth ? <p>Social Security: 123-45-6789</p> : null }
				</AuthContext.Consumer>
				<p> My name is {this.props.name} and I'm {this.props.age} years old.</p>
				<button type='submit' onClick={this.props.delete}>X</button>
				<span>Name:</span>
				<input 
					ref={this.inputElement}
					id='name' 
					type='text' 
					onChange={this.props.nameChange} 
					value={this.props.name}/>
				<span>Age:</span>
				<input 
					id='age' 
					type='text' 
					onChange={this.props.ageChange} 
					value={this.props.age}/>
			</div>
		);
	}
}

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.string,
	delete: PropTypes.func,
	nameChange: PropTypes.func,
	ageChange: PropTypes.func
}


export default Person;

