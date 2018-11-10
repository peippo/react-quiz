import React, { Component } from 'react';
import AnswerList from './AnswerList';

class Question extends Component {
	render() {
		const isActiveQuestion = this.props.activeQuestion === this.props.questionId;
		const isAnsweredQuestion = this.props.selectedAnswers[this.props.questionId] !== false
		
		let classes = "question question--disabled";
		classes =  isAnsweredQuestion ? "question" : classes;
		classes = isActiveQuestion || (isActiveQuestion && isAnsweredQuestion) ? "question question--active" : classes;

		return (
			<li 
				className = {classes}
				onClick = {(event) => isAnsweredQuestion ?
					this.props.handleQuestionChange(this.props.questionId, event) :
					false
				}
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
