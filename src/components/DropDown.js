import React, { useEffect, useState } from "react";
import {
	PeopleSuggestionContainer,
	ProfileContainer,
	StyledLink,
	ProfileIcon,
	Image,
	Wrapper,
} from "./Styled/DropDown.styled";
import { StyledSubmitButton } from "./Styled/Button";
import { useData } from "../context/DataContext";

export function PeopleSuggestion({ handleFollow }) {
	const [users, setUsers] = useState([]);
	const { getDocuments, getData } = useData();

	useEffect(() => {
		getDocuments("Users").then((result) => {
			result.forEach((doc) => {
				let id = doc.data().id;
				getData(id, "User").then((result) => {
					let obj = { ...result.data(), id };
					setUsers((u) => [...u, obj]);
				});
			});
		});
	}, [getDocuments, getData]);

	return (
		<PeopleSuggestionContainer>
			<Wrapper>
				<p>Suggestions for you</p>
				<StyledLink style={{ fontSize: "14px", fontWeight: "bold" }} to='/'>
					See All
				</StyledLink>
			</Wrapper>
			{users.map((user, index) => {
				return (
					<Wrapper key={`suggestion${index}`}>
						<div>
							<ProfileIcon>
								<Image src={user.photoUrl} alt='pp' />
							</ProfileIcon>
							<p>{user.Username}</p>
						</div>
						<StyledSubmitButton
							onClick={() => handleFollow(user.id)}
							fontColor='#0095f6'
						>
							Follow
						</StyledSubmitButton>
					</Wrapper>
				);
			})}
		</PeopleSuggestionContainer>
	);
}
export function NavBarProfile(props) {
	const { handleLogOut, handleProfile } = props;
	return (
		<ProfileContainer>
			<div>
				<StyledLink onClick={handleProfile} to='/profile'>
					<i className='bi bi-person-circle'></i>
					<p>profile</p>
				</StyledLink>
			</div>
			<div onClick={handleLogOut}>
				<p>Log Out</p>
			</div>
		</ProfileContainer>
	);
}
