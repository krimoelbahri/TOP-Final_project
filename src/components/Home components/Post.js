import React from "react";
import styled from "styled-components";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";
import PostImage from "./PostImage";
import PostStats from "./PostStats";

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
			<PostImage />
			<PostIcons />
			<PostStats />
			<PostComments />
		</Container>
	);
}
