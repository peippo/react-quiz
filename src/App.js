import React, { Component } from 'react';
import QuestionList from './components/QuestionList';
import './styles.scss';

const questions = require("./data.json");

class App extends Component {
	state = {
		questions: questions,
		selectedAnswers: [0, 0, 0],
		activeQuestion: 0
	}

	handleQuestionChange = (questionId) => {
		this.setState({
			activeQuestion: questionId
		});
	}

	handleAnswerChange = (questionId, event) => {
		const newAnswers = this.state.selectedAnswers.map((currentValue, index) => {
			return index === questionId ? parseInt(event.target.value) : currentValue
		});

		this.setState({
			selectedAnswers: newAnswers
		});
	}

	render() {
		return (
			<React.Fragment>
				<QuestionList
					questions = {this.state.questions}
					activeQuestion = {this.state.activeQuestion}
					selectedAnswers = {this.state.selectedAnswers}
					handleQuestionChange = {this.handleQuestionChange}
					handleAnswerChange = {this.handleAnswerChange}
				/>
			</React.Fragment>
		);
	}
}

export default App;
