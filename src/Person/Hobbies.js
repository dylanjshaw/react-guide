import React from 'react';


let hobbies = {
	hobby1: "coding",
	hobby2: "gym",
	hobby3: "basketball"
}

const hobbies = (props) => {
	return (
		<ul className = 'List'>
			<li>{props.hobby1}</li>
			<li>{props.hobby2}</li>
			<li>{props.hobby3}</li>
		</ul>
	)	
}

export default hobbies;