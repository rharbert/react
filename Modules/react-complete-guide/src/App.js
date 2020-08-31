import React, { Component } from 'react';
import './App.css';
import Person from './Component-Person/Person';

/* This file is the product of all Lessons in Module 3 */

class App extends Component {

	state = {
		persons: [
			{ name: 'Adam', age: 800},
      { name: 'Abel', age: 30},
      { name: 'Abinadab', age: 250}
		]
	}
	/* Method to make the Switch Name button below cause a change */
	switchAgeHandler = () => {
		this.setState({
			persons: [
				{ name: 'Adam', age: 900},
        { name: 'Abel', age: 35},
        { name: 'Abinadab', age: 200}
			],
			showPersons: false
		});
	}
	/* Method to Show/Hide all Person components; based on Boolean, true or false */
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}


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
				<div >{/* Toggled Div to Show/Hide all Person components*/} 
					<Person 
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}></Person>
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}></Person>
					<Person 
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}></Person>
				</div>/* End Toggled Div to Show/Hide all Person components*/
			);
		}

    return (
      <div className='App'>
				<button 
				style={styling}
				onClick={this.togglePersonHandler}>Show/Hide Persons</button>
				{persons}
      </div>
    );
  }
}

export default App;


//Alternative way to Toggle Div to Show/Hide all Person components; considered less elegant
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
