import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component { 
	render () {
		console.log('[Person.js] rendering...');
		return (
			<Aux>
				<p onClick={this.props.click}>
					I'm {this.props.name}. I'm {this.props.age} years old.<br></br>
					My username is <b>{this.props.username}</b>
				</p>

				<p>{this.props.children}</p>

				<input
				type="text"
				onChange={this.props.change}
				value={this.props.username}
				/>
			</Aux>
		);
	}
}

Person.propTypes = {
click: PropTypes.func, 
name: PropTypes.string, 
age: PropTypes.number, 
username: PropTypes.string,
changed: PropTypes.func
};

export default withClass(Person, classes.Person);  