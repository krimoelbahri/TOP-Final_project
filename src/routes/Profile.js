import React, { useEffect, useState } from "react";
import { ProfileHeaderContainer, ProfilesContainer } from "../components/Styled/Profile.styled";
import { MyLoader } from "../components/Loaders";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import ProfileHeader from "../components/Profile Components/ProfileHeader";
import ProfilePosts from "../components/Profile Components/ProfilePosts";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateFollowing } from "../states/followers";

export default function Profile() {
	const [isCurrentUser, setIsCurrentUser] = useState(false);
	const [profileLoading, setProfileLoading] = useState(true);
	const [postsLoading, setPostsLoading] = useState(true);
	const [currentUserPosts, setCurrentUserPosts] = useState({ posts: [] });
	const profileFollowing = useSelector((state) => state.followers.following);
	//const [profileFollowing, setProfileFollowing] = useState([]);
	const [profileFollowers, setProfileFollowers] = useState([]);

	const { getData, setCurrentUserData, setEditedData, currentUserData } = useData();
	const { currentUser } = useAuth();
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		getData(params.userid, "User")
			.then((result) => {
				setCurrentUserData(result.data());
				if (params.userid === currentUser.uid) {
					setEditedData(result.data());
					setIsCurrentUser(true);
				}
				dispatch(updateFollowing(result.data().Following));
				setProfileFollowers(result.data().Followers);
				setProfileLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setProfileLoading(false);
			});
	}, [setEditedData, currentUser, setCurrentUserData, dispatch, params]);
	useEffect(() => {
		getData(params.userid, "Posts")
			.then((result) => {
				if (result.exists()) {
					setCurrentUserPosts(result.data());
				} else {
					setCurrentUserPosts({ posts: [] });
				}
			})
			.then(() => {
				setPostsLoading(false);
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
					posts={currentUserPosts}
					followers={profileFollowers}
					following={profileFollowing}
				/>
			)}
			<ProfilePosts loading={postsLoading} posts={currentUserPosts} />
		</ProfilesContainer>
	);
}
