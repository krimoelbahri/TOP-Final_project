import React from "react";
import { ProfileInfoContainer, ProfileBio } from "../Styled/Profile.styled";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { StyledLink } from "../Styled/DropDown.styled";

export default function ProfileInfo() {
	const { currentUser } = useAuth();
	const { currentUserData } = useData();

	return (
		<ProfileInfoContainer>
			<div>
				<h3> {currentUser.displayName} </h3>
				<StyledLink to='/profile/edit'>
					<button>Edit profile</button>
				</StyledLink>
			</div>
			<ul>
				<li>
					<span>8</span> Posts
				</li>
				<li>
					<span>77</span> followers
				</li>
				<li>
					<span>120</span> following{" "}
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
						target='_blank'>
						<em>{currentUserData.Website}</em>
					</a>
				</p>
			</ProfileBio>
		</ProfileInfoContainer>
	);
}
