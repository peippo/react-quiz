import React from 'react';
import Question from './Question';

const QuestionList = props => {
	const {
		questions,
		activeQuestion,
		selectedAnswers,
		handleQuestionChange,
		handleAnswerChange
	} = props;

	return (
		<ol className = "quiz">
			{
				questions
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
};

export default QuestionList;
