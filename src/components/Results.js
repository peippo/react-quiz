import React from "react";

const Results = ({ points }) => (
	<div className="results">
		<div className="results__score drop-shape">
			<span>{points}</span>
			<span>points!</span>
		</div>
		{points >= 0 && points < 2 && <p className="results__message">Try again...</p>}
		{points >= 2 && points < 4 && <p className="results__message">Good effort!</p>}
		{points >= 4 && points < 5 && <p className="results__message">Great job!</p>}
		{points === 5 && <p className="results__message">Yay, perfect score!</p>}
	</div>
);

export default Results;
