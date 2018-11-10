import React, { Component } from 'react';
import QuestionList from './components/QuestionList';
import './styles.scss';

const questions = require("./data.json");

class App extends Component {
	state = {
		questions: questions,
		selectedAnswers: [false, false, false, false, false],
		activeQuestion: 0
	}

	handleQuestionChange = (questionId, event) => {
		const nextQuestionId = questionId >= this.state.questions.length ? questionId - 1 : questionId
		event.stopPropagation();
		this.setState({
			activeQuestion: nextQuestionId
		});
	}

	handleAnswerChange = (questionId, event) => {
		const newAnswers = this.state.selectedAnswers.map((currentValue, index) =>
			index === questionId ? parseInt(event.target.value) : currentValue
		);

		this.setState({
			selectedAnswers: newAnswers
		});
	}

	render() {
		const {
			questions,
			selectedAnswers,
			activeQuestion,
		} = this.state;

		return (
			<React.Fragment>
				<QuestionList
					questions = {questions}
					activeQuestion = {activeQuestion}
					selectedAnswers = {selectedAnswers}
					handleQuestionChange = {this.handleQuestionChange}
					handleAnswerChange = {this.handleAnswerChange}
				/>
			</React.Fragment>
		);
	}
}

export default App;
