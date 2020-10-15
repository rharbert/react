import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component { 
	constructor(props) {
		super();
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render () {
		console.log('[Person.js] rendering...');
		return (
			<Aux>
				{this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
	
				<p onClick={this.props.click}>
					I'm {this.props.name}. I'm {this.props.age} years old.<br></br>
					My username is <b>{this.props.username}</b>
				</p>

				<p>{this.props.children}</p>

				<input
				// ref={(inputEl) => {this.inputElement = inputEl}} //This ref works with the commented out portion of the componentDidMount above; older methodology
				ref={this.inputElementRef} //This ref works with the constructor function and componentDidMount above; latest methodology
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
change: PropTypes.func
};

export default withClass(Person, classes.Person);  