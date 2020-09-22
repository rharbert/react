import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Instructions from '../components/Instructions/Instructions';

/* This file is the product of all Lessons in Module 6 */

class App extends Component {

	state = {
		persons: [
			{ id: '123', name: 'Adam', age: 800, username: 'ABC123'},
      { id: '456', name: 'Abel', age: 30, username: 'ABC456'},
      { id: '789', name: 'Abinadab', age: 250, username: 'ABC789'}
		]
	}
	/********** Begin Methods **********/
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
		const persons = [...this.state.persons]; //Copies original array w/o mutation
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}
	/********** End Methods **********/

	render() {

		let persons = null; 
	
		if (this.state.showPersons) {
			persons =
					/* Insert Persons component */
					<Persons													
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.usernameHandler}/>; 
		}

    return (
				<div className={classes.App}>
					<Instructions
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