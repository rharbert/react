import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 50%;
	margin: 1rem auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 1rem;
	text-align: center;

	@media (min-width: 500px) {
		width: 60%; }
`;

const person = (props) => { /* props (a keyword) = properties or attributes. Allows you to pass data from
	a parent component */

	return (
		// <div className="Person" style={style}>
		<StyledDiv>
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.<br>
				</br>My username is <b>{props.username}</b></p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.username}></input>
		</StyledDiv>
	
	)
};

export default person;  