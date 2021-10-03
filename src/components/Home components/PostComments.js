import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export default function PostComments() {
	let commentsNumber = 200;
	return (
		<Container>
			<Comment />
			<Comment />
			<Comment />
			<a href='/'>
				<span>View all {commentsNumber} comments</span>
			</a>
		</Container>
	);
}
