import React from "react";
import AnswerOption from "./AnswerOption";
import AnswerSubmit from "./AnswerSubmit";

const AnswerList = ({
	answers,
	questionId,
	selectedAnswers,
	handleAnswerChange,
	handleQuestionChange
}) => {
	const isLastQuestion = selectedAnswers.length === questionId + 1;

	return (
		<form className="question__answers">
			{answers.map(answer => (
				<AnswerOption
					answerText={answer.answer}
					answerId={answer.id}
					key={answer.id}
					questionId={questionId}
					selectedAnswers={selectedAnswers}
					handleAnswerChange={handleAnswerChange}
				/>
			))}
			{!isLastQuestion && (
				<AnswerSubmit
					handleQuestionChange={handleQuestionChange}
					questionId={questionId}
					active={selectedAnswers[questionId] !== false}
				/>
			)}
		</form>
	);
};

export default AnswerList;
