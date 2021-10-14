import React from "react";
import { CommentContainer } from "../Styled/MainHome.styled";

export default function Comment() {
	return (
		<CommentContainer>
			<span>
				<a href='/'>Profile_Name </a>
			</span>
			&nbsp;
			<span> Some Comments</span>
		</CommentContainer>
	);
}
