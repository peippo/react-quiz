import React, { Component } from 'react';

class AnswerOption extends Component {
	render() {
		return (
			<div className="question__answer">
				<input
					className="question__input"
					type = "radio"
					value = {this.props.answerId}
					id = {this.props.answerId}
					name = {"question-" + this.props.questionId}
					checked = {this.props.selectedAnswers[this.props.questionId] === this.props.answerId}
					onChange = {(event) => this.props.handleAnswerChange(this.props.questionId, event)}
				/>
				<label
					className="question__label"
					for = {this.props.answerId}
				>
					{this.props.answerText}
				</label>
			</div>
		);
	}
}

export default AnswerOption;
