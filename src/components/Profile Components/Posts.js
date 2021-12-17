import React from "react";
import { PostsContainer } from "../Styled/Profile.styled";

export default function Posts({ posts, loading }) {
	return (
		<PostsContainer>
			{!loading ? (
				posts.posts.map((post, index) => {
					return (
						<div key={`image ${index}`}>
							<img src={post.photoUrl} alt='sample-img'></img>
						</div>
					);
				})
			) : (
				<></>
			)}
		</PostsContainer>
	);
}
