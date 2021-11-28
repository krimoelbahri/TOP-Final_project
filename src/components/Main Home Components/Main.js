import React from "react";
import Post from "./Post";
import { MainContainer } from "../Styled/MainHome.styled";
import { usePosts } from "../../context/PostContaxt";
import { MyLoader } from "../Loaders";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";

export default function Main({ loading }) {
	const { currentUserPosts } = usePosts();
	return (
		<MainContainer>
			{loading ? (
				<ProfileHeaderContainer>
					<MyLoader />
				</ProfileHeaderContainer>
			) : (
				currentUserPosts.posts.map((post, index) => {
					return <Post key={`post ${index}`} data={post} />;
				})
			)}
		</MainContainer>
	);
}
