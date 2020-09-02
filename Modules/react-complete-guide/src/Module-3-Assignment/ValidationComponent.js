import React from 'react';

const validation = (props) => {
	let validationMessage = 'Your text is too short. Please try again.';
	if (props.inputLength > 5) {
		validationMessage = 'Your text is long enough. Good job!';
	}
	
	return (
		<div className="Validation">
      <p>{validationMessage}</p>
		</div>
		
		/* Alternative solution to Validation div: Use of ternary expression */
		// <div className="Validation">

		// 	{props.inputLength > 5 ?
		// 		<p>Your text is too short.</p> :
		// 		<p>Your text is long enough.</p>
		// 	}
		// </div>
	);
};

export default validation;