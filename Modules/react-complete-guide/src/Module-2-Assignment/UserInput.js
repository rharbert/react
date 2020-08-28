import React from 'react';

const userInput = (props) => {
	const styling = {
		backgroundColor: 'lightblue',
		font: 'inherit',
		padding: '8px',
		margin: '5px'
	};
	return (
		<div className="UserInput">
			<input
			type="text"
			onChange={props.change}
			value={props.currentName}
			style={styling}></input>
		</div>
	)
};

export default userInput;