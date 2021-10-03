import React from "react";
import styled from "styled-components";
import SubmitButton from "../Form Components/SubmitButton";
const Container = styled.form`
	width: 100%;
	height: 55px;
	border-top: 1px solid #efefef;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const EmojiDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 15px;
	align-items: center;
`;
const Icon = styled.div`
	width: 25px;
	height: 25px;
	font-size: 25px;
	margin: 0 10px;
	border: 1px solid #dbdbdb;
	border-radius: 50%;
`;
const TextArea = styled.textarea`
	background: 0 0;
	border: 0;
	color: #262626;
	display: flex;
	flex-grow: 1;
	font-size: inherit;
	height: 18px;
	max-height: 80px;
	outline: 0;
	padding: 0;
	resize: none;
	width: 0;
`;
export default function AddComment() {
	return (
		<Container>
			<EmojiDiv>
				<Icon>
					<i className='bi bi-emoji-smile'></i>
				</Icon>
			</EmojiDiv>
			<TextArea placeholder='Add a comment... ' />
			<SubmitButton fontColor='#0095f6' fontOpacity='.3' disabled='disabled'>
				<h4>Post</h4>
			</SubmitButton>
		</Container>
	);
}
