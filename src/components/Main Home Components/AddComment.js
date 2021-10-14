import React from "react";
import {
	CommentForm,
	EmojiDiv,
	FormPostIcon,
	TextArea,
} from "../Styled/MainHome.styled";
import SubmitButton from "../Form Components/SubmitButton";

export default function AddComment() {
	return (
		<CommentForm>
			<EmojiDiv>
				<FormPostIcon>
					<i className='bi bi-emoji-smile'></i>
				</FormPostIcon>
			</EmojiDiv>
			<TextArea placeholder='Add a comment... ' />
			<SubmitButton
				type='submit'
				fontColor='#0095f6'
				fontOpacity='.3'
				disabled='disabled'>
				<h4>Post</h4>
			</SubmitButton>
		</CommentForm>
	);
}
