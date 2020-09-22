import React, { Component } from 'react';
import './containers/App.css';
import Person from './components/Persons/Person/Person';

/* This file is the product of all Lessons in Module 3 */

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
		const styling = {
			backgroundColor: 'lightblue',
			font: 'inherit',
			padding: '8px',
			margin: '.5rem',
			cursor: 'pointer'
		};

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

    return (
      <div className='App'>
				<button 
				style={styling}
				onClick={this.togglePersonHandler}>Show/Hide</button>
				{persons}
      </div>
    );
  }
}

export default App;

/********************** Reference Code Below **********************/

/* Render content conditionally. In this case, we want to 
Toggle the Div to Show/Hide all Person components */

// class App extends Component {

// 	state = {
// 		persons: [
// 			{ name: 'Adam', age: 800},
//       { name: 'Abel', age: 30},
//       { name: 'Abinadab', age: 250}
// 		]
// 	}
// 	/* Method to make the Switch Name button below cause a change */
// 	switchAgeHandler = () => {
// 		this.setState({
// 			persons: [
// 				{ name: 'Adam', age: 900},
//         { name: 'Abel', age: 35},
//         { name: 'Abinadab', age: 200}
// 			],
// 			showPersons: false
// 		});
// 	}
// 	/* Method to Show/Hide all Person components; based on Boolean, true or false */
// 	togglePersonHandler = () => {
// 		const doesShow = this.state.showPersons;
// 		this.setState({showPersons: !doesShow});
// 	}


// 	render() {
// 		const styling = {
// 			backgroundColor: 'lightblue',
// 			font: 'inherit',
// 			padding: '8px',
// 			margin: '.5rem',
// 			cursor: 'pointer'
// 		};

// 		let persons = null; 
// 		if (this.state.showPersons) {
// 			persons = (
// 				<div >{/* Toggled Div to Show/Hide all Person components*/} 
// 					<Person 
// 						name={this.state.persons[0].name}
// 						age={this.state.persons[0].age}></Person>
// 					<Person
// 						name={this.state.persons[1].name}
// 						age={this.state.persons[1].age}></Person>
// 					<Person 
// 						name={this.state.persons[2].name}
// 						age={this.state.persons[2].age}></Person>
// 				</div>/* End Toggled Div to Show/Hide all Person components*/
// 			);
// 		}

//     return (
//       <div className='App'>
// 				<button 
// 				style={styling}
// 				onClick={this.togglePersonHandler}>Show/Hide Persons</button>
// 				{persons}
//       </div>
//     );
//   }
// }

// export default App;


/*Alternative way to render content conditionally. In this case, we want to 
Toggle the Div to Show/Hide all Person components; considered less elegant than the method that
precedes
*/

// class App extends Component {

// 	state = {
// 		persons: [
// 			{ name: 'Adam', age: 800},
//       { name: 'Abel', age: 30},
//       { name: 'Abinadab', age: 250}
// 		]
// 	}
// 	/* Method to make the Switch Name button below cause a change */
// 	switchAgeHandler = () => {
// 		this.setState({
// 			persons: [
// 				{ name: 'Adam', age: 900},
//         { name: 'Abel', age: 35},
//         { name: 'Abinadab', age: 200}
// 			],
// 			showPersons: false
// 		});
// 	}
// 	/* Method to Show/Hide all Person components; based on Boolean, true or false */
// 	togglePersonHandler = () => {
// 		const doesShow = this.state.showPersons;
// 		this.setState({showPersons: !doesShow});
// 	}


// 	render() {
// 		const styling = {
// 			backgroundColor: 'lightblue',
// 			font: 'inherit',
// 			padding: '8px',
// 			margin: '.5rem',
// 			cursor: 'pointer'
// 		};

//     return (
//       <div className='App'>
// 				<button 
// 				style={styling}
// 				onClick={this.togglePersonHandler}>Show/Hide Persons</button>
// 				{/* Curly braces around div allows us to enter JS (in this case, a ternary statement) that 
// 				makes the div "conditional"; that is, logic to check whether its state is true or false
// 				(note: default state is false; aka, not shown) (line 24) */} 
// 				{this.state.showPersons === true ? 
// 					<div >{/* Toggle Div to Show/Hide all Person components*/} 
// 						<Person 
// 							name={this.state.persons[0].name}
// 							age={this.state.persons[0].age}></Person>
// 						<Person
// 							name={this.state.persons[1].name}
// 							age={this.state.persons[1].age}></Person>
// 						<Person 
// 							name={this.state.persons[2].name}
// 							age={this.state.persons[2].age}></Person>
// 					</div> : null }{/* End Toggle Div to Show/Hide all Person components*/} 
//       </div>
//     );
//   }
// }

// export default App;


