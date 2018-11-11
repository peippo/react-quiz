import React from "react";

const AnswerSubmit = ({ active, handleQuestionChange, questionId }) => {
	return (
		<input
			disabled={!active}
			className="question__submit"
			type="button"
			value="Seuraava"
			onClick={event => handleQuestionChange(questionId + 1, event)}
		/>
	);
};

export default AnswerSubmit;
