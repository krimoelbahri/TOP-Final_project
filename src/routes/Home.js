import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main Home Components/Main";
import { Container } from "../components/Styled/Home.styled";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContaxt";

export default function Home() {
	const { navBarLoading, getData, setData, userData, setNavBarLoading } =
		useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const { postsLoading, setCurrentUserPosts, setPostsLoading } = usePosts();
	useEffect(() => {
		if (!currentUser.displayName) {
			updateProfileNameAndImage("User", "/").then(() => {});
		}
	}, [currentUser.displayName, updateProfileNameAndImage]);
	useEffect(() => {
		console.log("user data check");
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
					),
				);
			}
		});
		setNavBarLoading(false);
	}, [currentUser, getData, setData, userData, setNavBarLoading]);
	useEffect(() => {
		console.log("fetching userPosts");
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

		setPostsLoading(false);
	}, [getData, setCurrentUserPosts, currentUser, setPostsLoading]);
	return (
		<Container>
			<NavBar loading={navBarLoading} />
			<Main loading={postsLoading} />
		</Container>
	);
}
