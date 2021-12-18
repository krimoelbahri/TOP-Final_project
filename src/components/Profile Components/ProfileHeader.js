import React from "react";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

export default function ProfileHeader({ posts, profilePic }) {
	return (
		<ProfileHeaderContainer>
			<ProfilePicture profilePic={profilePic} />
			<ProfileInfo posts={posts} />
		</ProfileHeaderContainer>
	);
}
