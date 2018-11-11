import React from "react";

const AnswerOption = ({
	answerId,
	questionId,
	selectedAnswers,
	handleAnswerChange,
	answerText
}) => {
	return (
		<div className="question__answer">
			<input
				className="question__input"
				type="radio"
				value={answerId}
				id={answerId}
				name={"question-" + questionId}
				checked={selectedAnswers[questionId] === answerId}
				onChange={event => handleAnswerChange(questionId, event)}
			/>
			<label className="question__label" htmlFor={answerId}>
				{answerText}
			</label>
		</div>
	);
};

export default AnswerOption;
