import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => { /* props (a keyword) = properties or attributes. Allows you to pass data from
	a parent component */
	return (
		<div className="Person">
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.<br>
				</br>My username is <b>{props.username}</b></p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.username}></input>
		</div>
	
	)
};

export default Radium(person);  //Radium allows us to add functionality (for example, pseudo styles)
								// to our styling