import React from 'react';
import classes from './Instructions.css';


const instructions = (props) => {
	
	let assignedClasses = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
			assignedClasses.push(classes.blue);
	}
	if(props.persons.length <= 1) {
			assignedClasses.push(classes.bold);
	}
	
	return (
		<div className={classes.Instructions}>
			<p className={assignedClasses.join(' ')}>Instructions for this application here</p>
			<button className={btnClass} onClick={props.clicked}>Show/Hide</button>
		</div>
		
	);
};


export default instructions;  

