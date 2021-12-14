import React, { useEffect, useState } from "react";
import Main from "../components/Main Home Components/Main";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContaxt";

export default function Home() {
	const { userPic, getData, setData, userData, setNavBarLoading, following } =
		useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const { postsLoading, setPostsLoading } = usePosts();
	const [posts, setPosts] = useState({ posts: [] });

	useEffect(() => {
		if (!currentUser.displayName) {
			updateProfileNameAndImage("User", userPic.current).then(() => {});
		}
	}, [userPic, currentUser, updateProfileNameAndImage]);
	useEffect(() => {
		getData(currentUser.uid, "User").then((result) => {
			if (!result.exists()) {
				setData(
					currentUser.uid,
					"User",
					userData(
						"",
						currentUser.displayName,
						currentUser.photoURL,
						currentUser.email,
						"",
						"",
						"",
						[],
						[],
					),
				);
			}
		});
		setNavBarLoading(false);
	}, [currentUser, getData, setData, userData, setNavBarLoading]);
	useEffect(() => {
		getData("Users", currentUser.uid).then((result) => {
			if (!result.exists()) {
				setData("Users", currentUser.uid, { id: currentUser.uid });
			}
		});
	}, [currentUser, getData, setData]);
	useEffect(() => {
		let arr = [];
		following.forEach((id) => {
			getData(id, "Posts")
				.then((result) => {
					if (result.exists()) {
						result.data().posts.forEach((post) => arr.push(post));
						setPosts({ posts: arr });
					} else {
						setPosts({ posts: [] });
					}
				})
				.catch((error) => {
					console.log(error);
				});
		});

		setPostsLoading(false);
	}, [getData, currentUser, setPostsLoading, following]);

	return <Main posts={posts} loading={postsLoading} />;
}
