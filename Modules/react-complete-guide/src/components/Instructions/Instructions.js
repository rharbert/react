import React, { useEffect } from 'react';
import classes from './Instructions.css';


const instructions = (props) => {

	useEffect(() => {
		console.log('[Instructions.js] useEffect');
		// HTTP request. You could use the useEffect functional component lifecycle hook to send an HTTP request.
		setTimeout(() => {
			alert("Data updated!");
		}, 1000);
	}, [props.persons]);
	
	const assignedClasses = [];
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
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>Instructions for this application here</p>
			<button className={btnClass} onClick={props.clicked}>Show/Hide</button>
		</div>
		
	);
};

//aka cockpit (but I don't like this name so I'm using 'instructions')
export default instructions;  

