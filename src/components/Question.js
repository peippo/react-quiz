import React, { Component } from 'react';
import AnswerList from './AnswerList';

class Question extends Component {

	render() {
		return (
			<div>
				{this.props.questionText}
				<AnswerList
					answers = {this.props.answers}
					questionId = {this.props.questionId}
					selectedAnswers = {this.props.selectedAnswers}
					handleAnswerChange = {this.props.handleAnswerChange}
				/>
			</div>
		);
	}
}

export default Question;
