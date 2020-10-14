import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

	/******************** Begin Lifecycle Hooks: Updating props changes ********************/
	static getDerivedStateFromProps(props, state) {
		console.log('[Persons.js] getDerivedStateFromProps');
		return state;
	}

	/* We have altered this file to PureComponent (as opposed to just "Component") in order to execute
	all the code associated with the shouldComponentUpdate function below. PureComponent by definition
	looks	for all props changes to justify a re-render without having to code it all out as the shouldComponent
	function does.*/

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js] shouldComponentUpdate');
	// 	if (
	// 		nextProps.persons !== this.props.persons ||
	// 		nextProps.changed !== this.props.changed ||
	// 		nextProps.clicked !== this.props.clicked
	// 		) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// } 

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot!'};
	}
	/***** Most Used One *****/
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.s] componentDidUpdate');
		console.log(snapshot);
	}
	/***** Hook for Cleanup Work *****/
	componentWillUnmount() {
		console.log('[Persons.s] componentWillUnmount');
	}
	/******************** End Lifecycle Hooks: Updating props changes ********************/
	

	render (){
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return (
				<Person
				click={ () => this.props.clicked(index)}
				name={person.name}
				age={person.age}
				username={person.username} 
				key={person.id}
				change={(event) => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;  