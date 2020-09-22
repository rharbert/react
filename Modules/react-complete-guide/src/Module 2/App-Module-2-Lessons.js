import React, { Component } from 'react';
import './containers/App.css';
import Person from './components/Persons/Person/Person';

/* This file is the product of all Lessons in Module 2 */


class App extends Component {
	/* 'state' is a property of the class-based Component. In this case, looks like an Object. 
	Only works inside an 'extended' class Component */
	state = {
		persons: [
			{ name: 'Abby', age: 3},
			{ name: 'Rachael', age: 30}
		]
	}
	/* Method to make the Switch Name button below cause a change */
	switchNameHandler = () => {
		/* "setState" is a special method */
		this.setState({
			persons: [
				{ name: 'Abilene', age: 3},
				{ name: 'Rachael', age: 32}
			]
		});
	}

	render() {
		const styling = {
			backgroundColor: 'lightblue',
			font: 'inherit',
			padding: '8px',
			cursor: 'pointer'
		};

    return (
      /* Rows 9-11 is JSX which looks like HTML, but it's actually not; it's an easy way to render
      HTML elements, but behind the scenes, this JSX gets compiled into JS. Notice, for example,
      a class assigned to the div is called "className" and not "class" as HTML dictates */
      <div className='App'>
        <h1>React App</h1>
				<button 
				style={styling}
				onClick={this.switchNameHandler.bind(this, 'Abby Lynn')}>Switch Name</button>
				{/*Insert Person component twice, referencing the state property above */}
				<Person 
					name={this.state.persons[0].name}
					age={this.state.persons[0].age} />
        <Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler} >
					Hobbies include: painting, cooking, gardening.
				</Person>
      </div>
    );
  }
}

export default App;

/* React version 16 method below */

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Component-Person/Person';

// const app = (props) => {
// 	//Use destructuring to pull the properties and assign them to variables
// 	const [personsState, setPersonsState] = useState({
// 		persons: [
// 			{ name: 'Abby', age: 3},
// 			{ name: 'Rachael', age: 30}
// 		],
// 		anotherProp: 'Some other value'
// 	});

// 	/* Method to make the Switch Name button below cause a change */
// 	const switchNameHandler = () => {
// 		setPersonsState({
// 			persons: [
// 				{ name: 'Abilene', age: 3},
// 				{ name: 'Rachael', age: 32}
// 			], 
// 			anotherProp: 'Some other value'
// 		});
// 	};

// 	return (
// 		/* Rows 9-11 is JSX which looks like HTML, but it's actually not; it's an easy way to render
// 		HTML elements, but behind the scenes, this JSX gets compiled into JS. Notice, for example,
// 		a class assigned to the div is called "className" and not "class" as HTML dictates */
// 		<div className='App'>
// 			<h1>React App</h1>
// 			<button onClick={switchNameHandler}>Switch Name</button>
// 			{/*Insert Person component twice, referencing the destructured variables above (~ row 7) */}
// 			<Person 
// 				name={personsState.persons[0].name}
// 				age={personsState.persons[0].age} />
// 			<Person
// 				name={personsState.persons[1].name}
// 				age={personsState.persons[1].age}>
// 				Hobbies include: painting, cooking, gardening.
// 			</Person>
// 		</div>
// 	);
// }

// export default app;