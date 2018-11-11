import React from "react";

const StatusIndicator = ({ answered }) => (
	<div className="question__status">
		{answered && <span className="question__saved">&#10003;</span>}
	</div>
);

export default StatusIndicator;
