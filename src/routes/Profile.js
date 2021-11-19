import React from "react";
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

export default function Profile() {
	const { profileLoading } = useData();
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
