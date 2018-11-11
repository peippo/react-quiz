import React from "react";

const StatusIndicator = ({ answered }) => (
	<div className="question__status">
		{answered && <span className="question__answered"></span>}
	</div>
);

export default StatusIndicator;
