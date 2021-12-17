import React from "react";
import { ProfileInfoContainer, ProfileBio, EditButton } from "../Styled/Profile.styled";
import { useData } from "../../context/DataContext";
import { StyledLink } from "../Styled/DropDown.styled";
import FollowButton from "./FollowButton";

export default function ProfileInfo({ following, followers, posts, isCurrentUser }) {
	const { currentUserData } = useData();

	return (
		<ProfileInfoContainer>
			<div>
				<h3> {currentUserData.Username} </h3>
				{isCurrentUser ? (
					<StyledLink to='/profile/edit'>
						<EditButton>Edit profile</EditButton>
					</StyledLink>
				) : (
					<FollowButton />
				)}
			</div>
			<ul>
				<li>
					<span>{posts.posts.length}</span> Posts
				</li>
				<li>
					<span>{followers.length}</span> followers
				</li>
				<li>
					<span>{following.length}</span> following
				</li>
			</ul>
			<ProfileBio>
				<span>{currentUserData.Name}</span>
				<br />
				<p>
					{currentUserData.Bio}
					<br />
					<a
						style={{ color: "black" }}
						href={currentUserData.Website}
						target='_blank'
						rel='noopener noreferrer'
					>
						<em>{currentUserData.Website}</em>
					</a>
				</p>
			</ProfileBio>
		</ProfileInfoContainer>
	);
}
