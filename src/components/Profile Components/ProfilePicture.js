import React from "react";
import { ProfilePictureContainer } from "../Styled/Profile.styled";
import { useAuth } from "../../context/AuthContext";

export default function PofilePicture({ profilePic }) {
	const { currentUser } = useAuth();

	return (
		<ProfilePictureContainer>
			<div>
				<img src={profilePic} alt='PP' />
			</div>
		</ProfilePictureContainer>
	);
}
