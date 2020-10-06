import React, { useEffect } from 'react';
import classes from './Instructions.css';


const instructions = (props) => {
	useEffect( () => {
		console.log('[Instructions.js] useEffect');
		// HTTP request. You could use the useEffect functional component lifecycle hook to send an HTTP request.
		setTimeout(() => {
			alert("Data updated!");
		}, 1000);
		return () => {
			console.log('[Instructions.js] Cleanup work in useEffect');
		};
	}, []); //props.persons could be placed into the array as an argument here. Meaning what exactly?
	//Presently, the empty array means that the useEffect runs when Instructions.js initializes and then when it's "Removed" 
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

