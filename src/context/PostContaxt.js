import React, { useContext, useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { useData } from "./DataContext";
import { useAuth } from "./AuthContext";
const PostContext = React.createContext();

export function usePosts() {
	return useContext(PostContext);
}

export function PostsProvider({ children }) {
	const { getData } = useData();
	const { currentUser } = useAuth();
	const [currentUserPosts, setCurrentUserPosts] = useState({ posts: [] });
	const [postsLoading, setPostsLoading] = useState(true);

	function userPost(title, photoUrl, likes, comments) {
		let date = Timestamp.fromDate(new Date());
		return { title, photoUrl, likes, comments, date };
	}

	const value = {
		postsLoading,
		currentUserPosts,
		setCurrentUserPosts,
		userPost,
	};
	useEffect(() => {
		console.log("fetching userPosts");
		if (currentUser) {
			getData(currentUser.uid, "Posts")
				.then((result) => {
					if (result.exists()) {
						setCurrentUserPosts(result.data());
					} else {
						setCurrentUserPosts({ posts: [] });
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
		setPostsLoading(false);
	}, [currentUser, getData]);
	return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
