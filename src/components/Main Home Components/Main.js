import React from "react";
import Post from "./Post";
import { MainContainer } from "../Styled/MainHome.styled";
import { usePosts } from "../../context/PostContaxt";

export default function Main() {
	const { currentUserPosts } = usePosts();
	return (
		<MainContainer>
			{currentUserPosts.posts.map((post, index) => {
				return <Post key={`post ${index}`} data={post} />;
			})}
		</MainContainer>
	);
}
