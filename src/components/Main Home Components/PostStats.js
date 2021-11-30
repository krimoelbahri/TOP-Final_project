import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 20px;
	flex-direction: row;
	align-items: center;
	font-weight: bold;
	padding-left: 20px;
`;

export default function PostStats({ likes }) {
	return (
		<Container>
			<span>{likes.length}</span> {` Likes`}
		</Container>
	);
}
