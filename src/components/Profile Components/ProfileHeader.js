import React from "react";
import { ProfileHeaderContainer } from "../Styled/Profile.styled";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

export default function ProfileHeader({
	followers,
	following,
	posts,
	profilePic,
	isCurrentUser,
}) {
	return (
		<ProfileHeaderContainer>
			<ProfilePicture profilePic={profilePic} />
			<ProfileInfo
				followers={followers}
				following={following}
				isCurrentUser={isCurrentUser}
				posts={posts}
			/>
		</ProfileHeaderContainer>
	);
}
