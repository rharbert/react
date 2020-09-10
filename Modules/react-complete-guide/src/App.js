import React, { Component } from 'react';

import './App.css';
import Person from './Component-Person/Person';


/* This file is the product of all Lessons in Module 4 */


class App extends Component {

	state = {
		persons: [
			{ id: '123', name: 'Adam', age: 800, username: 'ABC123'},
      { id: '456', name: 'Abel', age: 30, username: 'ABC456'},
      { id: '789', name: 'Abinadab', age: 250, username: 'ABC789'}
		]
	}
	/***** Methods *****/
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
		const persons = [...this.state.persons]; //Copies the original array since we don't want to mutate original
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}
	/***** End Methods *****/

	render() {

		let persons = null; 
		if (this.state.showPersons) {
			persons = (
				<div>{/* Toggled Div to Show/Hide all Person components */} 
					{/* Use the Person Component and fill it out by mapping through the array of persons shown
					in the 'state' above and place it all in a Div that toggles on/off */}
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							username={person.username} 
							key={person.id} /* This property is required by React. Why? Keys help React identify which items
							have changed, are added, or are removed. Keys should be given to elements inside the array to give
							elements a stable identity. Each child in an array should have a unique 'key' prop. */ 
							change={(event) => this.usernameHandler(event, person.id)}/>
					})}
				</div>/* End Toggled Div to Show/Hide all Person components*/
			);
		
		}

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('blue');
		}
		if(this.state.persons.length <= 1) {
			classes.push('bold');
		}

    return (

				<div className='App'>
					<p className={classes.join(' ')}>Instructions for this application here</p>
					<button className="button" onClick={this.togglePersonHandler}>Show/Hide</button>
					{persons}
				</div>

    );
  }
}

export default App;