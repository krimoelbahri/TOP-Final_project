import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { StyledSubmitButton } from "../components/Styled/Button";
import {
	UsersContainer,
	Wrapper,
	LoaderWrapper,
	ProfileIcon,
	Image,
	StyledLink,
} from "../components/Styled/Users.styled";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { shuffleArray } from "../Functions/arrayHelpers";
import { handleFollowing, handleUnFollowing } from "../Functions/handleFollow";

export default function Users() {
	const [loading, setloading] = useState(true);
	const [users, setUsers] = useState([]);
	const { getDocuments, getData } = useData();
	const { currentUser } = useAuth();

	useEffect(() => {
		async function fetching() {
			let result = await getDocuments("Users");
			result.forEach((doc) => {
				let id = doc.data().id;
				if (id === currentUser.uid) return;
				getData(id, "User").then((result) => {
					let obj = { ...result.data(), id };
					setUsers((u) => [...u, obj]);
				});
			});
			setloading(false);
		}
		fetching();
	}, [getDocuments, currentUser]);
	return (
		<UsersContainer>
			{!loading ? (
				shuffleArray(users).map((user, index) => {
					return (
						<Wrapper key={`suggestion${index}`}>
							<StyledLink to={`/profile/${user.id}`}>
								<div>
									<ProfileIcon>
										<Image src={user.photoUrl} alt='pp' />
									</ProfileIcon>
									<p>{user.Username}</p>
								</div>
							</StyledLink>
							<FollowButton id={user.id} />
						</Wrapper>
					);
				})
			) : (
				<LoaderWrapper>
					<Loader type='Oval' color='black' height={20} width={50} />
				</LoaderWrapper>
			)}
		</UsersContainer>
	);
}
function FollowButton({ id }) {
	const [loading, setLoading] = useState(true);
	const [followButton, setFollowButton] = useState("");
	const { currentUser } = useAuth();
	const { getData, setData } = useData();

	const handleClick = async function () {
		setLoading(true);
		if (followButton === "Follow") {
			await handleFollowing(id, currentUser.uid, getData, setData);
			setFollowButton("Unfollow");
		}
		if (followButton === "Unfollow") {
			await handleUnFollowing(id, currentUser.uid, getData, setData);
			setFollowButton("Follow");
		}
		setLoading(false);
	};

	useEffect(() => {
		getData(currentUser.uid, "User")
			.then((result) => {
				if (result.data().Following.includes(id)) {
					setFollowButton("Unfollow");
				} else {
					setFollowButton("Follow");
				}
			})
			.then(() => setLoading(false))
			.catch((error) => {
				console.log(error);
			});
	}, [currentUser, id]);
	return (
		<>
			{!loading ? (
				<StyledSubmitButton
					onClick={handleClick}
					backgroundColor='#0095f6'
					fontColor='white'
				>
					{followButton}
				</StyledSubmitButton>
			) : (
				<StyledSubmitButton backgroundColor='#0095f6'>
					<Loader type='Oval' color='white' height={20} width={50} />
				</StyledSubmitButton>
			)}
		</>
	);
}
