import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {

	render() {
		return (
			<ol className = "quiz">
				{
					this.props.questions
					.map((question) => (
						<Question
							shortTitle = {question.shortTitle}
							questionText = {question.question}
							questionId = {question.id}
							answers = {question.answers}
							key = {question.id}
							activeQuestion = {this.props.activeQuestion}
							selectedAnswers = {this.props.selectedAnswers}
							handleQuestionChange = {this.props.handleQuestionChange}
							handleAnswerChange = {this.props.handleAnswerChange}
						/>
					))
				}
			</ol>
		);
	}
}

export default QuestionList;
