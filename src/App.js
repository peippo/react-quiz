import React, { Component } from "react";
import QuestionList from "./components/QuestionList";
import Results from "./components/Results";
import "./styles.scss";

const questions = require("./data.json");

class App extends Component {
	state = {
		questions: questions,
		selectedAnswers: [false],
		points: [0],
		activeQuestion: 0
	};

	initializeState = (questionsAmount) => {
		let newAnswers, newPoints, activeQuestion;

		if (sessionStorage.quiz_answers && sessionStorage.quiz_answers.length > 0) {
			newAnswers = JSON.parse(sessionStorage.getItem("quiz_answers"));
			newPoints = JSON.parse(sessionStorage.getItem("quiz_points"));
			activeQuestion = parseInt(sessionStorage.getItem("quiz_active_question"));
		} else {
			newAnswers = new Array(questionsAmount);
			newPoints = new Array(questionsAmount);
			newAnswers.fill(false, 0, questionsAmount);
			newPoints.fill(0, 0, questionsAmount);
			activeQuestion = 0;
		}

		this.setState({
			selectedAnswers: newAnswers,
			points: newPoints,
			activeQuestion: activeQuestion
		});
	}

	handleQuestionChange = (questionId, event) => {
		const nextQuestionId =
			questionId >= this.state.questions.length ? questionId - 1 : questionId;
		event.stopPropagation();

		sessionStorage.setItem("quiz_active_question", nextQuestionId);

		this.setState({
			activeQuestion: nextQuestionId
		});
	};

	handleAnswerChange = (questionId, event) => {
		const answerId = parseInt(event.target.value);
		this.updateAnswers(questionId, answerId);
		this.updatePoints(questionId, answerId);
	};

	updateAnswers = (questionId, answerId) => {
		const newAnswers = this.state.selectedAnswers.map((currentValue, index) =>
			index === questionId ? answerId : currentValue
		);

		sessionStorage.setItem("quiz_answers", JSON.stringify(newAnswers));

		this.setState({
			selectedAnswers: newAnswers
		});
	}

	updatePoints = (questionId, answerId) => {
		const newPoints = this.state.points.map((currentValue, index) =>
			index === questionId
				? this.state.questions[questionId].answers[answerId].points
				: currentValue
		);

		sessionStorage.setItem("quiz_points", JSON.stringify(newPoints));

		this.setState({
			points: newPoints
		});
	}

	resetQuiz = () => {
		sessionStorage.removeItem("quiz_answers");
		sessionStorage.removeItem("quiz_points");
		sessionStorage.removeItem("quiz_active_question");
		this.initializeState(this.state.questions.length);
	}

	componentDidMount() {
		this.initializeState(this.state.questions.length);
	}

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
				{allQuestionsAnswered &&
				<Results
					resetQuiz={this.resetQuiz}
					points={points.reduce((sum, x) => sum + x)} />
				}
			</div>
		);
	}
}

export default App;
