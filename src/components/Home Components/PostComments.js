import React from "react";
import styled from "styled-components";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const ViewCommentsLink = styled.a`
	padding-left: 20px;
	margin-top: 5px;
	color: #8e8e8e;
`;
const AgeLink = styled(ViewCommentsLink)`
	font-size: 10px;
	margin-bottom: 15px;
`;

export default function PostComments() {
	let commentsNumber = 200;
	let postAge = "1 DAY";
	return (
		<Container>
			<Comment />
			<Comment />
			<Comment />
			<ViewCommentsLink href='/'>
				<span>View all {commentsNumber} comments</span>
			</ViewCommentsLink>
			<AgeLink>
				<span>{postAge} AGO</span>
			</AgeLink>
			<AddComment />
		</Container>
	);
}
