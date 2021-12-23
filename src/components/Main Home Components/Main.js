import React, { useState, useEffect } from "react";
import Post from "./Post";
import { MainContainer } from "../Styled/MainHome.styled";
import { MyLoader } from "../Loaders";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

export default function Main() {
	const { getData } = useData();
	const { currentUser } = useAuth();

	const [postsLoading, setPostsLoading] = useState(true);
	const [posts, setPosts] = useState({ posts: [] });
	const [sortedPosts, setSortedPosts] = useState([]);
	const [following, setFollowing] = useState([]);
	useEffect(() => {
		getData(currentUser.uid, "User").then((result) => {
			if (result.exists()) {
				setFollowing(result.data().Following);
			}
		});
	}, [currentUser, setFollowing]);
	useEffect(() => {
		let idArray = [...following, currentUser.uid];
		let arr = [];
		idArray.forEach((id) => {
			getData(id, "Posts")
				.then((result) => {
					if (result.exists()) {
						result.data().posts.forEach((post) => arr.push(post));
						setPosts({ posts: arr });
					} else {
						setPosts({ posts: arr });
					}
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}, [currentUser, following]);
	useEffect(() => {
		setSortedPosts(posts.posts.sort((a, b) => b.date - a.date));
		setPostsLoading(false);
	}, [posts]);
	return (
		<MainContainer>
			{postsLoading ? (
				<ProfileHeaderContainer>
					<MyLoader />
				</ProfileHeaderContainer>
			) : (
				sortedPosts.map((post, index) => {
					return <Post key={`post ${index}`} data={post} />;
				})
			)}
		</MainContainer>
	);
}
