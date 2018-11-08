import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {

	render() {
		return (
			<div>
				{
					this.props.questions
					.map((question) => (
						<Question
							questionText = {question.question}
							questionId = {question.id}
							answers = {question.answers}
							key = {question.id}
							selectedAnswers = {this.props.selectedAnswers}
							handleAnswerChange = {this.props.handleAnswerChange}
						/>
					))
				}
			</div>
		);
	}
}

export default QuestionList;
