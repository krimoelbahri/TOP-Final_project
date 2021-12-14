import React from "react";
import Post from "./Post";
import { MainContainer } from "../Styled/MainHome.styled";
import { MyLoader } from "../Loaders";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";

export default function Main({ loading, posts }) {
	console.log(posts.posts);
	return (
		<MainContainer>
			{loading ? (
				<ProfileHeaderContainer>
					<MyLoader />
				</ProfileHeaderContainer>
			) : (
				posts.posts.map((post, index) => {
					return <Post key={`post ${index}`} data={post} />;
				})
			)}
		</MainContainer>
	);
}
