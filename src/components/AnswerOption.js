import React from "react";

const AnswerOption = ({
	answerId,
	questionId,
	selectedAnswers,
	handleAnswerChange,
	answerText
}) => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};

export default AnswerOption;
