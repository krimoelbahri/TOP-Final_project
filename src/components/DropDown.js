import React, { useEffect, useState } from "react";
import {
	PeopleSuggestionContainer,
	ProfileContainer,
	StyledLink,
	ProfileIcon,
	Image,
	Wrapper,
	LoaderWrapper,
} from "./Styled/DropDown.styled";
import { StyledSubmitButton } from "./Styled/Button";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import Loader from "react-loader-spinner";
import filterSuggestions from "../Functions/arrayHelpers";

export function PeopleSuggestion({ handleFollow }) {
	const [loading, setloading] = useState(true);
	const [users, setUsers] = useState([]);
	const { getDocuments, getData } = useData();
	const { currentUser } = useAuth();

	useEffect(async () => {
		let result = await getDocuments("Users");
		result.forEach((doc) => {
			let id = doc.data().id;
			if (id === currentUser.uid) return;
			getData(currentUser.uid, "User").then((result) => {
				if (result.data().Following.includes(id)) {
					return;
				} else {
					getData(id, "User").then((result) => {
						let obj = { ...result.data(), id };
						setUsers((u) => [...u, obj]);
					});
				}
			});
		});

		setloading(false);
	}, [getDocuments, getData]);

	return (
		<PeopleSuggestionContainer>
			<Wrapper>
				<p>Suggestions for you</p>
				<StyledLink style={{ fontSize: "14px", fontWeight: "bold" }} to='/'>
					See All
				</StyledLink>
			</Wrapper>
			{!loading ? (
				filterSuggestions(users).map((user, index) => {
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
				})
			) : (
				<LoaderWrapper>
					<Loader type='Oval' color='black' height={20} width={50} />
				</LoaderWrapper>
			)}
		</PeopleSuggestionContainer>
	);
}
export function NavBarProfile(props) {
	const { handleLogOut, handleProfile } = props;
	const { currentUser } = useAuth();
	return (
		<ProfileContainer>
			<div>
				<StyledLink
					onClick={() => {
						handleProfile();
					}}
					to={`/profile/${currentUser.uid}`}
				>
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
