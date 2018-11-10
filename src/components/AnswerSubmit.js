import React from 'react';

const AnswerSubmit = (props) =>
	<input
		disabled = {!props.active}
		className = "question__submit"
		type = "button"
		value = "Tallenna"
		onClick = {(event) => props.handleQuestionChange(props.questionId + 1, event)}	
	/>

export default AnswerSubmit;
