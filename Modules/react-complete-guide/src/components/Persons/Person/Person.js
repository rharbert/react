import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component { 
	render () {
		console.log('[Person.js] rendering...');
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} years old.<br>
					</br>My username is <b>{this.props.username}</b></p>
				<p>{this.props.children}</p>
				<input
					type="text"
					onChange={this.props.change}
					value={this.props.username}></input>
			</div>
		);
	}
};

export default Person;  