import React, { Component } from 'react';

class AnswerOption extends Component {
	render() {
		return (
			<label>
				<input
					type = "radio"
					value = {this.props.answerId}
					name = {"question-" + this.props.questionId}
					checked = {this.props.selectedAnswers[this.props.questionId] === this.props.answerId}
					onChange = {(event) => this.props.handleAnswerChange(this.props.questionId, event)}
				/>
				{this.props.answerText}
			</label>
		);
	}
}

export default AnswerOption;
