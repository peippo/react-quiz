import React, { Component } from 'react';
import AnswerOption from './AnswerOption';
import AnswerSubmit from './AnswerSubmit';

class AnswerList extends Component {
	render() {
		const {
			questionId,
			selectedAnswers,
			handleAnswerChange,
			handleQuestionChange
		} = this.props;

		const isLastQuestion = selectedAnswers.length === questionId + 1;
		
		return (
			<form className = "question__answers">
				{
					this.props.answers
					.map((answer) => (
						<AnswerOption
							answerText = {answer.answer}
							answerId = {answer.id}
							key = {answer.id}
							questionId = {questionId}
							selectedAnswers = {selectedAnswers}
							handleAnswerChange = {handleAnswerChange}
						/>
					))
				}
				{
					!isLastQuestion &&
					<AnswerSubmit
						handleQuestionChange = {handleQuestionChange}
						questionId = {questionId}
						active = {selectedAnswers[questionId] !== false}
					/>
				}
			</form>
		);
	}
}

export default AnswerList;
