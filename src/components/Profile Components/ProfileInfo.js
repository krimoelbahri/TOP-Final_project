import React from "react";
import { ProfileInfoContainer, ProfileBio } from "../Styled/Profile.styled";
import { useData } from "../../context/DataContext";
import { StyledLink } from "../Styled/DropDown.styled";
import { usePosts } from "../../context/PostContaxt";

export default function ProfileInfo({ isCurrentUser }) {
	const { currentUserData, profileFollowing, profileFollowers } = useData();
	const { currentUserPosts } = usePosts();

	return (
		<ProfileInfoContainer>
			<div>
				<h3> {currentUserData.Username} </h3>
				{isCurrentUser ? (
					<StyledLink to='/profile/edit'>
						<button>Edit profile</button>
					</StyledLink>
				) : (
					<></>
				)}
			</div>
			<ul>
				<li>
					<span>{currentUserPosts.posts.length}</span> Posts
				</li>
				<li>
					<span>{profileFollowers.length}</span> followers
				</li>
				<li>
					<span>{profileFollowing.length}</span> following
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
