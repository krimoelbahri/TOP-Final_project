import React from "react";
import { sortArray } from "../../Functions/arrayHelpers";
import { PostsContainer, RatioContainer } from "../Styled/Profile.styled";
import { AspectRatio } from "@chakra-ui/react";
export default function Posts({ posts, loading }) {
	return (
		<PostsContainer>
			{!loading ? (
				sortArray(posts.posts, "age").map((post, index) => {
					return (
						<RatioContainer key={`image${index}`}>
							<AspectRatio maxW='100%' ratio={1}>
								<img src={post.photoUrl} alt='sample-img'></img>
							</AspectRatio>
						</RatioContainer>
					);
				})
			) : (
				<></>
			)}
		</PostsContainer>
	);
}
