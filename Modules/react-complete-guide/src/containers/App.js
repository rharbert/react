import React, { Component } from 'react';

import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Instructions from '../components/Instructions/Instructions';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';


/* This file is the product of all Lessons in Module 7 */

class App extends Component {
	/******************** Lifecycle Hook: Creation ********************/
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}
	/******************** Lifecycle Hook: Creation ********************/

	state = {
		persons: [
			{ id: '123', name: 'Adam', age: 800, username: 'ABC123'},
      { id: '456', name: 'Abel', age: 30, username: 'ABC456'},
      { id: '789', name: 'Abinadab', age: 250, username: 'ABC789'}
		],
		showPersons: false, 
		showInstructions: true
	};

	/******************** Lifecycle Hooks: Creation ********************/
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}	
	
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}
	/******************** Lifecycle Hooks: Creation ********************/
	
	/******************** Lifecycle Hooks: Updating ********************/
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
			return true;
	}	
	
	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}
	/******************** Lifecycle Hooks: Updating ********************/
	

	/******************** Begin Component Methods ********************/
	usernameHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id;
		});

		const person = {
			...this.state.persons[personIndex] 
		};

		person.name = event.target.value;
		
		this.setState({
			persons: [
				{id: '123', name: 'Adam', age: 800, username: event.target.value},
     		{id: '456', name: 'Abel', age: 30, username: event.target.value},
      	{id: '789', name: 'Abinadab', age: 250, username: event.target.value}
			]
		});

		/* 3 rows of code below is supposed to replace the setState directly above, but it doesn't work
			 correctly. Why??!! */
		// const persons = [...this.state.persons];
		// persons[personIndex] = person;
		// this.setState({persons: persons});

		// Code directly below for setting state properly when new state is dependent upon actual previous state
		// this.setState((prevState, props) => {
		// 	return {
		// 		persons: persons,
		// 		changeCounter: prevState.changeCounter + 1
		// 	};
		// });
	}
	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice(); //Copies original array w/o mutation
		const persons = [...this.state.persons]; //Copies original array w/o mutation using spread operator (ES6 method)
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}
	/******************** End Component Methods ********************/

	
	render() {
		console.log('[App.js] render');
		let persons = null; 
	
		if (this.state.showPersons) {
			persons = (
				/* Insert Persons.js Component */
				<Persons													
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.usernameHandler}/> 
			);
		}

    return (
			<Aux>
				<button
					onClick={ () => {
						this.setState({ showInstructions: false });
					}}
				> Remove </button>
				
				{this.state.showInstructions ? (
					<Instructions //aka Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						personsLength={this.state.persons.length}
						clicked={this.togglePersonHandler}
					/>
					) : null }

				{persons}
			</Aux>	
    );
  }
}

export default withClass(App, classes.App);