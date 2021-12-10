import React, { useContext, useState } from "react";
import { Timestamp } from "firebase/firestore";
const PostContext = React.createContext();

export function usePosts() {
	return useContext(PostContext);
}

export function PostsProvider({ children }) {
	const [currentUserPosts, setCurrentUserPosts] = useState({ posts: [] });
	const [postsLoading, setPostsLoading] = useState(true);

	function userPost(postId, userId, title, photoUrl, likes, comments) {
		let date = Timestamp.fromDate(new Date());
		return {
			postId,
			userId,
			title,
			photoUrl,
			likes,
			comments,
			date,
		};
	}
	function userComment(CommentId, userId, comment) {
		let date = Timestamp.fromDate(new Date());
		return {
			CommentId,
			userId,
			comment,
			date,
		};
	}

	const value = {
		setPostsLoading,
		postsLoading,
		currentUserPosts,
		setCurrentUserPosts,
		userPost,
		userComment,
	};

	return (
		<PostContext.Provider value={value}>{children}</PostContext.Provider>
	);
}