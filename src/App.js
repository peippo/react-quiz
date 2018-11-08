import React, { Component } from 'react';
import QuestionList from './components/QuestionList';
import './App.css';

const questions = require("./data.json");

class App extends Component {
	state = {
		questions: questions,
		selectedAnswers: [0, 0, 0]
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
					selectedAnswers = {this.state.selectedAnswers}
					handleAnswerChange = {this.handleAnswerChange}
				/>
			</React.Fragment>
		);
	}
}

export default App;
