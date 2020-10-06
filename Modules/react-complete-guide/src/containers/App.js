import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Instructions from '../components/Instructions/Instructions';

/* This file is the product of all Lessons in Module 7 */

class App extends Component {
	/******************** Lifecycle Hook: Creation ********************/
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}	 /******************** Lifecycle Hook: Creation ********************/

	state = {
		persons: [
			{ id: '123', name: 'Adam', age: 800, username: 'ABC123'},
      { id: '456', name: 'Abel', age: 30, username: 'ABC456'},
      { id: '789', name: 'Abinadab', age: 250, username: 'ABC789'}
		],
		showPersons: false
	}

	/******************** Lifecycle Hooks: Creation ********************/
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}	
	
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}		/******************** Lifecycle Hooks: Creation ********************/
	
	/******************** Lifecycle Hooks: Updating state changes ********************/
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}	
	
	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}	/******************** Lifecycle Hooks: Updating state changes ********************/
	

	/******************** Begin Component Methods ********************/
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

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
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice(); //Copies original array w/o mutation
		const persons = [...this.state.persons]; //Copies original array w/o mutation, ES6 method (aka spread operator)
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}
	/******************** End Component Methods ********************/

	render() {
		console.log('[App.js] render');
		let persons = null; 
	
		if (this.state.showPersons) {
			persons =
					/* Insert Persons.js Component */
					<Persons													
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.usernameHandler}/>; 
		}

    return (
				<div className={classes.App}>
					<Instructions //aka Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						persons={this.state.persons}
						clicked={this.togglePersonHandler}
					/>
					{persons}
				</div>
    );
  }
}

export default App;