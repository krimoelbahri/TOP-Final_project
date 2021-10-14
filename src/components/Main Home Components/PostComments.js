import React from "react";
import { ViewCommentsLink, AgeLink } from "../Styled/MainHome.styled";
import AddComment from "./AddComment";
import Comment from "./Comment";

export default function PostComments() {
	let commentsNumber = 200;
	let postAge = "1 DAY";
	return (
		<div>
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
		</div>
	);
}
