import React from 'react';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>I'm {props.name}.</p>
			<p>My username is {props.username}.</p>
		</div>
	)
};

export default userOutput;