import React from 'react';
import Person from './Person/Person';


const Persons = (props) => props.persons.map((person, index) => {
      return <Person
            name={person.name}
            age={person.age}
            delete={() => props.delete(index)}  
            nameChange={(event) => props.nameChange(event, person.id)}
            ageChange={(event) => props.ageChange(event, person.id)}
            key={person.id}/>
		});


export default Persons;
