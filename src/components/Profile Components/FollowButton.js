import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { StyledSubmitButton } from "../Styled/Button";
import Loader from "react-loader-spinner";
import { handleFollowing, handleUnFollowing } from "../../Functions/handleFollow";
import { useDispatch } from "react-redux";
import { updateFollowers } from "../../states/followers";

export default function FollowButton() {
	const [loading, setLoading] = useState(true);
	const [followButton, setFollowButton] = useState("");

	const { currentUser } = useAuth();
	const { getData, setData } = useData();
	const params = useParams();
	const dispatch = useDispatch();

	const handleClick = async function () {
		setLoading(true);
		if (followButton === "Follow") {
			const obj = await handleFollowing(params.userid, currentUser.uid, getData, setData);
			setFollowButton("Unfollow");
			dispatch(updateFollowers(obj.userFollowers));
		}
		if (followButton === "Unfollow") {
			const obj = await handleUnFollowing(params.userid, currentUser.uid, getData, setData);
			setFollowButton("Follow");
			dispatch(updateFollowers(obj.userFollowers));
		}
		setLoading(false);
	};

	useEffect(() => {
		getData(currentUser.uid, "User")
			.then((result) => {
				if (result.data().Following.includes(params.userid)) {
					setFollowButton("Unfollow");
				} else {
					setFollowButton("Follow");
				}

				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [currentUser, params]);
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
