import React from 'react';
import './Person.css';

const person = (props) => { /* props (a keyword) = properties or attributes. Allows you to pass data from
	a parent component */
	return (
		<div className="Person">
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.</p>
			<p>{props.children}</p>
			<input type="text"></input>
		</div>
	
	)
};

export default person;