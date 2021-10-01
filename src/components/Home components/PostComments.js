import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export default function PostComments() {
	return (
		<Container>
			<Comment />
            <Comment />
            <Comment />
		</Container>
	);
}
