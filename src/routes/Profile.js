import React, { useEffect } from "react";
import {
	Container,
	ProfileHeaderContainer,
	ProfilesContainer,
} from "../components/Styled/Profile.styled";
import { MyLoader } from "../components/Loaders";
import { useData } from "../context/DataContext";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/Profile Components/ProfileHeader";
import ProfilePosts from "../components/Profile Components/ProfilePosts";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
	const { profileLoading, getData, setCurrentUserData, setProfileLoading } =
		useData();
	const { currentUser } = useAuth();

	useEffect(() => {
		console.log("fetching userData");
		getData(currentUser.uid, "User")
			.then((result) => {
				setCurrentUserData(result.data());
				setProfileLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setProfileLoading(false);
			});
	}, [currentUser, setCurrentUserData, setProfileLoading]);
	return (
		<Container>
			<NavBar />
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
		</Container>
	);
}
