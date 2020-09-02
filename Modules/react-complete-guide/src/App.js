import React, { Component } from 'react';
import './App.css';

import CharComponent from './Module-3-Assignment/CharComponent';
import ValidationComponent from './Module-3-Assignment/ValidationComponent';

import './Module-3-Assignment/CharComponent.css';

/* This file is the product of Assignment in Module 3 */

class App extends Component {
	state = {
		userInput: ''
	}
	
	inputChangeHandler = (event) => {
		this.setState({userInput: event.target.value})
	}

	deleteIndexHandler = (index) => {
		const text = this.state.userInput.split(' ');
		text.splice(index, 1);
		const updatedText = text.join(' ');
		this.setState({userInput: updatedText});
	}
	
	render() {
		const styling = {
			backgroundColor: 'pink',
			font: 'inherit',
			padding: '8px',
			margin: '.5rem',
			cursor: 'pointer'
		};

		const charList = this.state.userInput.split(' ').map((chars, index) => {
			return <CharComponent
				characters={chars}
				key={index}
				clicked={() => this.deleteIndexHandler(index)} />;
		});
    return (
      <div className='App'>
				<input
				type="text"
				onChange={this.inputChangeHandler}
				value={this.state.userInput}
				style={styling} />
				<p>{this.state.userInput}</p>
				<ValidationComponent inputLength={this.state.userInput.length}/>
				{charList}
      </div>
    );
  }
}

export default App;