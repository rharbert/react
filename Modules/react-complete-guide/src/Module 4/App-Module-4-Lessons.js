import React, { Component } from 'react';
import classes from './containers/App.css';
import Person from './components/Persons/Person/Person';

/* This file is the product of all Lessons in Module 4 */

class App extends Component {

	state = {
		persons: [
			{ id: '123', name: 'Adam', age: 800, username: 'ABC123'},
      { id: '456', name: 'Abel', age: 30, username: 'ABC456'},
      { id: '789', name: 'Abinadab', age: 250, username: 'ABC789'}
		]
	}
	/***** Begin Methods *****/
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
		let buttonClasses = '';

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
			
			buttonClasses = classes.Red;
		}

		let assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.blue);
		}
		if(this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

    return (

				<div className={classes.App}>
					<p className={assignedClasses.join(' ')}>Instructions for this application here</p>
					<button className={buttonClasses} onClick={this.togglePersonHandler}>Show/Hide</button>
					{persons}
				</div>

    );
  }
}

export default App;