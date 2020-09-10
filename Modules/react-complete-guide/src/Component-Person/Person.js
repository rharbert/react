import React from 'react';
import classes from './Person.css';


const person = (props) => { /* props (a keyword) = properties or attributes. Allows you to pass data from
	a parent component */

	return (
		// <div className="Person" style={style}>
		<div className={classes.Person}>
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.<br>
				</br>My username is <b>{props.username}</b></p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.username}></input>
		</div>
	
	)
};

export default person;  