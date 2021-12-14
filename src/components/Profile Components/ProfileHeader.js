import React from "react";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

export default function ProfileHeader({ profilePic, isCurrentUser }) {
	return (
		<ProfileHeaderContainer>
			<ProfilePicture profilePic={profilePic} />
			<ProfileInfo isCurrentUser={isCurrentUser} />
		</ProfileHeaderContainer>
	);
}
