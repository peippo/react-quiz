import React from 'react';

const StatusIndicator = props => (
	<div className="question__status">
		{
			props.answered &&
			<span className="question__saved">&#10003;</span>
		}
	</div>
);

export default StatusIndicator;
