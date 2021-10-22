import React from "react";
import { ProfilePictureContainer } from "../Styled/Profile.styled";
import { useAuth } from "../../context/AuthContext";

export default function PofilePicture() {
	const { currentUser } = useAuth();

	return (
		<ProfilePictureContainer>
			<div>
				<img src={currentUser.photoURL} alt='PP' />
			</div>
		</ProfilePictureContainer>
	);
}
