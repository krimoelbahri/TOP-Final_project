import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: inherit;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	margin: 20px 0 0 0;
`;

export default function Post() {
	return (
		<Container>
			<PostHeader />
		</Container>
	);
}
