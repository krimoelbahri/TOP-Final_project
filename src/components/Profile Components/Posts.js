import React from "react";
import { sortArray } from "../../Functions/arrayHelpers";
import { PostsContainer } from "../Styled/Profile.styled";

export default function Posts({ posts, loading }) {
	return (
		<PostsContainer>
			{!loading ? (
				sortArray(posts.posts, "age").map((post, index) => {
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
