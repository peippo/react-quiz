import React from 'react';
import AnswerList from './AnswerList';
import StatusIndicator from './StatusIndicator';

const Question = props => {
	const {
		activeQuestion,
		selectedAnswers,
		questionId,
		shortTitle,
		questionText,
		answers,
		handleAnswerChange,
		handleQuestionChange
	} = props;

	const isActiveQuestion = activeQuestion === questionId;
	const isAnsweredQuestion = selectedAnswers[questionId] !== false
	const isNextQuestion = selectedAnswers[questionId] === false &&
		selectedAnswers[questionId - 1] !== false &&
		questionId + 1 !== activeQuestion
	
	let classes = "question question--disabled";
	classes =  isAnsweredQuestion ? "question" : classes;
	classes =  isNextQuestion ? "question question--next" : classes;
	classes = isActiveQuestion || (isActiveQuestion && isAnsweredQuestion) ? "question question--active" : classes;

	return (
		<li 
			className = {classes}
			onClick = {(event) => isAnsweredQuestion || isNextQuestion ?
				handleQuestionChange(questionId, event) :
				false
			}
		>
			<StatusIndicator
				answered = {isAnsweredQuestion}
			/>
			<div className="question__block">
				<h2 className = "question__title">
					{shortTitle}
				</h2>
				{
					isActiveQuestion &&
					<div className="question__content">
						<h3 className = "question__heading">
							{questionText}
						</h3>
						<AnswerList
							answers = {answers}
							questionId = {questionId}
							selectedAnswers = {selectedAnswers}
							handleAnswerChange = {handleAnswerChange}
							handleQuestionChange = {handleQuestionChange}
						/>
					</div>
				}
			</div>
		</li>
	)
}

export default Question;
