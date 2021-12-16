import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

export default function Profile() {
	const [isCurrentUser, setIsCurrentUser] = useState(false);
	const {
		profileLoading,
		getData,
		setCurrentUserData,
		setEditedData,
		setProfileLoading,
		setProfileFollowing,
		setProfileFollowers,
		currentUserData,
	} = useData();
	const { currentUser } = useAuth();
	const { setCurrentUserPosts } = usePosts();
	const params = useParams();

	useEffect(() => {
		console.log("hi");
		function fetching() {
			getData(params.userid, "User")
				.then((result) => {
					setCurrentUserData(result.data());
					if (params.userid === currentUser.uid) {
						setEditedData(result.data());
						setIsCurrentUser(true);
					}
					setProfileFollowing(result.data().Following);
					setProfileFollowers(result.data().Followers);
					setProfileLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setProfileLoading(false);
				});
		}
		fetching();
	}, [setEditedData, currentUser, setCurrentUserData, setProfileLoading, params]);
	useEffect(() => {
		getData(params.userid, "Posts")
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
	}, [getData, setCurrentUserPosts, params]);

	return (
		<ProfilesContainer>
			{profileLoading ? (
				<ProfileHeaderContainer>
					<MyLoader style={{ margin: "0 auto" }} />
				</ProfileHeaderContainer>
			) : (
				<ProfileHeader
					profilePic={currentUserData.photoUrl}
					isCurrentUser={isCurrentUser}
				/>
			)}
			<ProfilePosts />
		</ProfilesContainer>
	);
}
