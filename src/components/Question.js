import React, { Component } from 'react';
import AnswerList from './AnswerList';

class Question extends Component {
	render() {
		const isActiveQuestion = this.props.activeQuestion === this.props.questionId;
		
		return (
			<li 
				className = {isActiveQuestion ? "question question--active" : "question"}
				onClick = {(event) => this.props.handleQuestionChange(this.props.questionId, event)}
			>
				<h2 className = "question__title">
					{this.props.shortTitle}
				</h2>
				{
					isActiveQuestion &&
					<React.Fragment>
						<h3 className = "question__heading">
							{this.props.questionText}
						</h3>
						<AnswerList
							answers = {this.props.answers}
							questionId = {this.props.questionId}
							selectedAnswers = {this.props.selectedAnswers}
							handleAnswerChange = {this.props.handleAnswerChange}
							handleQuestionChange = {this.props.handleQuestionChange}
						/>
					</React.Fragment>
				}
			</li>
		);
	}
}

export default Question;
