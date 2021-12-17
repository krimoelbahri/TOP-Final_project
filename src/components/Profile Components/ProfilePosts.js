import React from "react";
import { ProfilePostsContainer, PostsHeader } from "../Styled/Profile.styled";
import Posts from "./Posts";

export default function ProfilePosts({ posts, loading }) {
	return (
		<ProfilePostsContainer>
			<PostsHeader>
				<div>
					<i className='bi bi-grid-3x3'></i>
					<span>POSTS</span>
				</div>
				<div>
					<i className='bi bi-bookmark'></i>
					<span>SAVED</span>
				</div>
			</PostsHeader>
			<Posts posts={posts} loading={loading} />
		</ProfilePostsContainer>
	);
}
