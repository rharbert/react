import React, { useEffect, useRef } from 'react';
import classes from './Instructions.css';

//Named "Cockpit" in lessons, but I don't like this name so I'm using 'instructions'
const instructions = (props) => {

	const toggleBtnRef = useRef(null);

	useEffect( () => {
		console.log('[Instructions.js] useEffect');
		// The useEffect functional component lifecycle hook can be used to send an HTTP request.
		// setTimeout(() => {
		// 	alert("Data updated!");
		// }, 1000);
		toggleBtnRef.current.click();
		return () => {
			console.log('[Instructions.js] Cleanup work in useEffect');
		};
	}, []); //props.persons could be placed into the empty array as an argument here. Meaning what exactly? Presently, the empty array means that the useEffect runs when Instructions.js initializes and then when it's "Removed" 
	
	const assignedClasses = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = classes.Red;
	}
	if (props.personsLength <= 2) {
			assignedClasses.push(classes.blue);
	}
	if (props.personsLength <= 1) {
			assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Instructions}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>Instructions for this application here</p>
			<button
				ref={toggleBtnRef}
				className={btnClass}
				onClick={props.clicked}>
					Show/Hide
			</button>
		</div>
	);
};

export default React.memo(instructions);
// "React.memo" is a way to make sure this file does not re-render unless it's changed; for optimization purposes

