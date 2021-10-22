import React from "react";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

export default function ProfileHeader() {
	return (
		<ProfileHeaderContainer>
			<ProfilePicture />
			<ProfileInfo />
		</ProfileHeaderContainer>
	);
}
