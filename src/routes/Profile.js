import React, { useEffect, useState } from "react";
import {
	Container,
	ProfileHeaderContainer,
	ProfilesContainer,
} from "../components/Styled/Profile.styled";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { MyLoader } from "../components/Loaders";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/Profile Components/ProfileHeader";
import ProfilePosts from "../components/Profile Components/ProfilePosts";

export default function Profile() {
	const [loading, setLoading] = useState(true);

	const { getData, setCurrentUserData } = useData();
	const { currentUser } = useAuth();

	useEffect(() => {
		console.log("fetching userData");
		getData(currentUser.uid, "User")
			.then((result) => {
				setCurrentUserData(result.data());
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);
	return (
		<Container>
			<NavBar />
			<ProfilesContainer>
				{loading ? (
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
