import React, { Component } from 'react';
import AnswerOption from './AnswerOption';

class AnswerList extends Component {

	render() {
		return (
			<form className = "question__answers">
				{
					this.props.answers
					.map((answer) => (
						<AnswerOption
							answerText = {answer.answer}
							answerId = {answer.id}
							key = {answer.id}
							questionId = {this.props.questionId}
							selectedAnswers = {this.props.selectedAnswers}
							handleAnswerChange = {this.props.handleAnswerChange}
						/>
					))
				}
			</form>
		);
	}
}

export default AnswerList;
