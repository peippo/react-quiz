import React, { Component } from 'react';
import AnswerList from './AnswerList';

class Question extends Component {
	render() {
		const {
			activeQuestion,
			selectedAnswers,
			questionId,
			shortTitle,
			questionText,
			answers,
			handleAnswerChange,
			handleQuestionChange
		} = this.props;

		const isActiveQuestion = activeQuestion === questionId;
		const isAnsweredQuestion = selectedAnswers[questionId] !== false
		
		let classes = "question question--disabled";
		classes =  isAnsweredQuestion ? "question" : classes;
		classes = isActiveQuestion || (isActiveQuestion && isAnsweredQuestion) ? "question question--active" : classes;

		return (
			<li 
				className = {classes}
				onClick = {(event) => isAnsweredQuestion ?
					handleQuestionChange(questionId, event) :
					false
				}
			>
				<h2 className = "question__title">
					{shortTitle}
				</h2>
				{
					isActiveQuestion &&
					<React.Fragment>
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
					</React.Fragment>
				}
			</li>
		);
	}
}

export default Question;
