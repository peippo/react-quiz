import React from "react";
import Question from "./Question";

const QuestionList = ({
	questions,
	activeQuestion,
	selectedAnswers,
	handleQuestionChange,
	handleAnswerChange
}) => {
	return (
		<ol className="quiz">
			{questions.map(question => (
				<Question
					shortTitle={question.shortTitle}
					questionText={question.question}
					questionDescription={question.description}
					questionId={question.id}
					answers={question.answers}
					key={question.id}
					totalQuestions={questions.length}
					activeQuestion={activeQuestion}
					selectedAnswers={selectedAnswers}
					handleQuestionChange={handleQuestionChange}
					handleAnswerChange={handleAnswerChange}
				/>
			))}
		</ol>
	);
};

export default QuestionList;
