import React from "react";
import {
	Container,
	ProfilesContainer,
} from "../components/Styled/Profile.styled";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/Profile Components/ProfileHeader";
import ProfilePosts from "../components/Profile Components/ProfilePosts";

export default function Profile() {
	return (
		<Container>
			<NavBar />
			<ProfilesContainer>
                <ProfileHeader/>
				<ProfilePosts/>
            </ProfilesContainer>
		</Container>
	);
}
