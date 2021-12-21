import React, { useContext } from "react";
import { Timestamp } from "firebase/firestore";
const PostContext = React.createContext();

export function usePosts() {
	return useContext(PostContext);
}

export function PostsProvider({ children }) {
	function userPost(postId, userId, photoUrl, likes, comments) {
		let date = Timestamp.fromDate(new Date());
		return { postId, userId, photoUrl, likes, comments, date };
	}
	function userComment(CommentId, userId, comment) {
		let date = Timestamp.fromDate(new Date());
		return { CommentId, userId, comment, date };
	}

	const value = {
		userPost,
		userComment,
	};

	return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
