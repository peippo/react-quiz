import React from "react";
import AnswerList from "./AnswerList";
import StatusIndicator from "./StatusIndicator";
import QuestionDescription from "./QuestionDescription";
import QuestionNumber from "./QuestionNumber";

const Question = ({
	activeQuestion,
	selectedAnswers,
	questionId,
	shortTitle,
	questionText,
	questionDescription,
	answers,
	totalQuestions,
	handleAnswerChange,
	handleQuestionChange
}) => {
	const isActiveQuestion = activeQuestion === questionId;
	const isAnsweredQuestion = selectedAnswers[questionId] !== false;
	const isNextQuestion =
		selectedAnswers[questionId] === false &&
		selectedAnswers[questionId - 1] !== false &&
		questionId + 1 !== activeQuestion;

	let classes = "question question--disabled";
	classes = isAnsweredQuestion ? "question" : classes;
	classes = isNextQuestion ? "question question--next" : classes;
	classes = isActiveQuestion || (isActiveQuestion && isAnsweredQuestion)
			? "question question--active"
			: classes;

	return (
		<li
			className={classes}
			onClick={event =>
				isAnsweredQuestion || isNextQuestion
					? handleQuestionChange(questionId, event)
					: false
			}
		>
			<StatusIndicator answered={isAnsweredQuestion} />
			<div className="question__block">
				<h2 className="question__title">{shortTitle}</h2>
				<QuestionNumber questionNumber={questionId + 1} totalQuestions={totalQuestions}/>
				{isActiveQuestion && (
					<div className="question__content">
						<h3 className="question__heading">{questionText}</h3>
						<AnswerList
							answers={answers}
							questionId={questionId}
							selectedAnswers={selectedAnswers}
							handleAnswerChange={handleAnswerChange}
							handleQuestionChange={handleQuestionChange}
						/>
						<QuestionDescription
							questionDescription={questionDescription}
						/>
					</div>
				)}
			</div>
		</li>
	);
};

export default Question;
