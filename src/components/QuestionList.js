import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
	render() {
		const {
			activeQuestion,
			selectedAnswers,
			handleQuestionChange,
			handleAnswerChange
		} = this.props;

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
							activeQuestion = {activeQuestion}
							selectedAnswers = {selectedAnswers}
							handleQuestionChange = {handleQuestionChange}
							handleAnswerChange = {handleAnswerChange}
						/>
					))
				}
			</ol>
		);
	}
}

export default QuestionList;
