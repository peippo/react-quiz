import React from "react";

const QuestionNumber = ({ questionNumber, totalQuestions }) => (
	<div className="question__number">
		{questionNumber} <span className="question__total">{totalQuestions}</span>
	</div>
);

export default QuestionNumber;
