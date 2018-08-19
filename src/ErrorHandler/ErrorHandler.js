// used to show custom error message in production environment when there might be errors you cannot control
import React, {Component} from 'react';


class ErrorHandler extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMesage: error
		})
	}

	render(){
		if(this.state.hasError){
			return (
				<h1>Something went wrong: {this.state.errorMessage}</h1>
			);
		} else {
			return this.props.children;
		}
	}
}


export default ErrorHandler;