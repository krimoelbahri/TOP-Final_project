import React from "react";
import { ProfilePictureContainer } from "../Styled/Profile.styled";

export default function PofilePicture({ profilePic }) {
	return (
		<ProfilePictureContainer>
			<div>
				<img src={profilePic} alt='PP' />
			</div>
		</ProfilePictureContainer>
	);
}
