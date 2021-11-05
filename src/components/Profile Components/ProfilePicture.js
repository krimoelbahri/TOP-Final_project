import React from "react";
import { ProfilePictureContainer } from "../Styled/Profile.styled";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

export default function PofilePicture() {
	const { currentUser } = useAuth();
	const { userPic } = useData();

	return (
		<ProfilePictureContainer>
			<div>
				<img
					src={currentUser.photoURL ? currentUser.photoURL : userPic}
					alt='PP'
				/>
			</div>
		</ProfilePictureContainer>
	);
}
