import React, { useEffect } from "react";
import {
	ProfileHeaderContainer,
	ProfilesContainer,
} from "../components/Styled/Profile.styled";
import { MyLoader } from "../components/Loaders";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContaxt";
import ProfileHeader from "../components/Profile Components/ProfileHeader";
import ProfilePosts from "../components/Profile Components/ProfilePosts";

export default function Profile() {
	const {
		profileLoading,
		getData,
		setCurrentUserData,
		setEditedData,
		setProfileLoading,
	} = useData();
	const { currentUser } = useAuth();
	const { setCurrentUserPosts } = usePosts();

	useEffect(() => {
		console.log("fetching userData");
		getData(currentUser.uid, "User")
			.then((result) => {
				setCurrentUserData(result.data());
				setEditedData(result.data());
				setProfileLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setProfileLoading(false);
			});
	}, [currentUser, setEditedData, setCurrentUserData, setProfileLoading]);
	useEffect(() => {
		console.log("fetching userPosts profile");
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
	}, [getData, setCurrentUserPosts, currentUser]);
	return (
		<ProfilesContainer>
			{profileLoading ? (
				<ProfileHeaderContainer>
					<MyLoader style={{ margin: "0 auto" }} />
				</ProfileHeaderContainer>
			) : (
				<ProfileHeader />
			)}
			<ProfilePosts />
		</ProfilesContainer>
	);
}
