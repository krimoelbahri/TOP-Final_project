import React, { useState } from "react";
import { CommentForm, EmojiDiv, FormPostIcon, TextArea } from "../Styled/MainHome.styled";
import SubmitButton from "../Form Components/SubmitButton";

export default function AddComment({ handleSubmitComment }) {
	const [disabled, setDisabled] = useState(true);
	const [opacity, setOpacity] = useState("0.3");
	const [comment, setComment] = useState("");
	const [textValue, setTextValue] = useState("");
	function handleComment(e) {
		setTextValue(e.target.value);
		if (e.target.value) {
			setDisabled(false);
			setOpacity("1");
		}
		if (!e.target.value) {
			setDisabled(true);
			setOpacity("0.3");
		}
		setComment(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		handleSubmitComment(comment);
		setTextValue("");
		setDisabled(true);
		setOpacity("0.3");
	}
	return (
		<CommentForm onSubmit={handleSubmit}>
			<EmojiDiv>
				<FormPostIcon>
					<i className='bi bi-emoji-smile'></i>
				</FormPostIcon>
			</EmojiDiv>
			<TextArea onChange={handleComment} value={textValue} placeholder='Add a comment... ' />
			<SubmitButton
				type='submit'
				fontColor='#0095f6'
				fontOpacity={opacity}
				disabled={disabled}
			>
				<h4>Post</h4>
			</SubmitButton>
		</CommentForm>
	);
}
