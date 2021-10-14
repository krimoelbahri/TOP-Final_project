import React from "react";
import { PostContainer } from "../Styled/MainHome.styled";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";
import PostImage from "./PostImage";
import PostStats from "./PostStats";

export default function Post() {
	return (
		<PostContainer>
			<PostHeader />
			<PostImage />
			<PostIcons />
			<PostStats />
			<PostComments />
		</PostContainer>
	);
}
