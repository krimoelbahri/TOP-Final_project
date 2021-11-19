import React from "react";
import { PostsContainer } from "../Styled/Profile.styled";
import { usePosts } from "../../context/PostContaxt";

export default function Posts() {
	const { currentUserPosts } = usePosts();
	return (
		<PostsContainer>
			{currentUserPosts.posts.map((post, index) => {
				return (
					<div key={`image ${index}`}>
						<img src={post.photoUrl} alt='sample-img'></img>
					</div>
				);
			})}
		</PostsContainer>
	);
}
