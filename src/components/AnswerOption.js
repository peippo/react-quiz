import React, { Component } from 'react';

class AnswerOption extends Component {
	render() {
		const {
			answerId,
			questionId,
			selectedAnswers,
			handleAnswerChange,
			answerText
		} = this.props;

		return (
			<div className="question__answer">
				<input
					className="question__input"
					type = "radio"
					value = {answerId}
					id = {answerId}
					name = {"question-" + questionId}
					checked = {selectedAnswers[questionId] === answerId}
					onChange = {(event) => handleAnswerChange(questionId, event)}
				/>
				<label
					className="question__label"
					htmlFor = {answerId}
				>
					{answerText}
				</label>
			</div>
		);
	}
}

export default AnswerOption;
