import React, { Component } from 'react';
import './App.css';

import UserInput from './Module-2-Assignment/UserInput';
import UserOutput from './Module-2-Assignment/UserOutput';

import './Module-2-Assignment/UserOutput.css';

/* This file is the product of Assignment in Module 2 */

class App extends Component {

	state = {
		persons: [
			{ name: 'Tom', username: 'Thomas123'},
			{ name: 'Dick', username: 'RichardXYZ'},
			{ name: 'Harry', username: 'Harold456'}
		]
	}

	/* Method */
	usernameHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Tom', username: event.target.value},
			]
		});
	}

	render() {
		
    return (
			<div className='App'>
				<UserOutput
				name={this.state.persons[0].name}
				username={this.state.persons[0].username}></UserOutput>
				<UserInput
				change={this.usernameHandler}
				currentName={this.state.persons[0].username}></UserInput>
      </div>
		);
  }
}

export default App;
