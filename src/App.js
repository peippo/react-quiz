import React, { Component } from "react";
import QuestionList from "./components/QuestionList";
import Results from "./components/Results";
import "./styles.scss";

const questions = require("./data.json");

class App extends Component {
	state = {
		questions: questions,
		selectedAnswers: [false, false, false, false, false],
		points: [0, 0, 0, 0, 0],
		activeQuestion: 0
	};

	handleQuestionChange = (questionId, event) => {
		const nextQuestionId =
			questionId >= this.state.questions.length ? questionId - 1 : questionId;
		event.stopPropagation();
		this.setState({
			activeQuestion: nextQuestionId
		});
	};

	handleAnswerChange = (questionId, event) => {
		const answerId = parseInt(event.target.value);
		const newAnswers = this.state.selectedAnswers.map((currentValue, index) =>
			index === questionId ? answerId : currentValue
		);
		const newPoints = this.state.points.map((currentValue, index) =>
			index === questionId
				? this.state.questions[questionId].answers[answerId].points
				: currentValue
		);

		this.setState({
			selectedAnswers: newAnswers,
			points: newPoints
		});
	};

	render() {
		const { questions, selectedAnswers, points, activeQuestion } = this.state;
		const allQuestionsAnswered = selectedAnswers[selectedAnswers.length - 1] !== false;

		return (
			<div className="quiz">
				<QuestionList
					questions={questions}
					activeQuestion={activeQuestion}
					selectedAnswers={selectedAnswers}
					handleQuestionChange={this.handleQuestionChange}
					handleAnswerChange={this.handleAnswerChange}
				/>
				{allQuestionsAnswered && <Results points={points.reduce((sum, x) => sum + x)} />}
			</div>
		);
	}
}

export default App;
