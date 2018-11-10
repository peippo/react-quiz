import React, { Component } from 'react';
import AnswerList from './AnswerList';

class Question extends Component {
	render() {
		return (
			<div>
				<h2 onClick = {() => this.props.handleQuestionChange(this.props.questionId)}>
					{this.props.shortTitle}
				</h2>
				{
					this.props.activeQuestion === this.props.questionId &&
					<React.Fragment>
						{this.props.questionText}
						<AnswerList
							answers = {this.props.answers}
							questionId = {this.props.questionId}
							selectedAnswers = {this.props.selectedAnswers}
							handleAnswerChange = {this.props.handleAnswerChange}
						/>
					</React.Fragment>
				}
			</div>
		);
	}
}

export default Question;
