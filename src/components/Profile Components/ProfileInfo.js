import React from "react";
import { ProfileInfoContainer, ProfileBio } from "../Styled/Profile.styled";
import { useAuth } from "../../context/AuthContext";

export default function ProfileInfo() {
	const { currentUser } = useAuth();

	return (
		<ProfileInfoContainer>
			<div>
				<h3> {currentUser.displayName} </h3>
				<button>Edit profile</button>
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
				<span>Elbahri</span>
				<br />
				<p>Lorem ipsum jaajjds</p>
			</ProfileBio>
		</ProfileInfoContainer>
	);
}
