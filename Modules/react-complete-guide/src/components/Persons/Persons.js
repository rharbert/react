import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
	/******************** Lifecycle Hooks: Updating props changes ********************/
	static getDerivedStateFromProps(props, state) {
		console.log('[Persons.js] getDerivedStateFromProps');
		return state;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.s] shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot!'};
	}

	/***** Most Used One *****/
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.s] componentDidUpdate');
		console.log(snapshot);
	}
	/******************** Lifecycle Hooks: Updating props changes ********************/
	
	render (){
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return (
				<Person
				click={() => this.props.clicked(index)}
				name={person.name}
				age={person.age}
				username={person.username} 
				key={person.id}
				change={(event) => this.props.changed(event, person.id)}/>
			);
		});
	}
}

export default Persons;  