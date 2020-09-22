import React from 'react';

const characters = (props) => {
	const styling = {
		display: 'inline-block', 
		padding: '1rem',
		margin: '1rem',
		cursor: 'pointer',
		border: '1px solid gray'
	};
	
	return (
		<div
		style={styling}
		className="Characters"
		onClick={props.clicked}>
			{props.characters}
		</div>
	)
};

export default characters;