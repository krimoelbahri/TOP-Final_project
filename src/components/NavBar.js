import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import Overlay from "./Overlay";
import styled from "styled-components";
import { PeopleSuggestion, NavBarProfile } from "./DropDown";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { usePosts } from "../context/PostContaxt";
import {
	Container,
	StyledNavBar,
	StyledSearch,
	Wraper,
	WrapperChild,
	Span,
} from "./Styled/NavBar.styled";

export const StyledLink = styled(Link)`
	color: black;
`;
export default function NavBar() {
	const [heart, setHeart] = useState(false);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const location = useLocation();
	const { currentUser, logout } = useAuth();
	const {
		setIsModalVisible,
		toggleBodyOverflow,
		setData,
		getData,
		setFollowing,
		setFollowers,
	} = useData();
	const { setPostsLoading, setCurrentUserPosts } = usePosts();

	const handleLogOut = () => {
		setPostsLoading(true);
		setCurrentUserPosts({ posts: [] });
		logout();
	};

	//this will handle filling heart icon and showing suggestion dropdown
	const handleHeart = () => {
		setHeart(!heart);
		setShowSuggestions(!showSuggestions);
		if (showProfile) {
			setShowProfile(!showProfile);
		}
	};

	//this will handle showing profile dropdown
	const handleProfile = () => {
		setShowProfile(!showProfile);
		if (showSuggestions) {
			setShowSuggestions(!showSuggestions);
			setHeart(!heart);
		}
	};
	const handleAddPost = () => {
		setIsModalVisible(true);
		toggleBodyOverflow();
	};
	const handleFollow = async function (id) {
		handleHeart();
		//handling Following the user
		let userResult = await getData(currentUser.uid, "User");
		let arr = userResult.data().Following;
		if (!arr.includes(id)) {
			arr.push(id);
		}
		await setData(currentUser.uid, "User", {
			...userResult.data(),
			Following: arr,
		});
		//handling adding Followers to the user
		let result = await getData(id, "User");
		let userFollowers = result.data().Followers;
		if (!userFollowers.includes(currentUser.uid)) {
			userFollowers.push(currentUser.uid);
		}
		await setData(id, "User", {
			...result.data(),
			Followers: userFollowers,
		});
	};
	useEffect(() => {
		getData(currentUser.uid, "User").then((result) => {
			if (result.exists()) {
				setFollowing(result.data().Following);
				setFollowers(result.data().Followers);
			}
		});
	}, [currentUser, setFollowing, setFollowers]);
	return (
		<Container>
			<StyledNavBar>
				<Wraper justifyContent='flex-start' className='header-logo'>
					<StyledLink to='/'>Fakegram</StyledLink>
				</Wraper>
				<StyledSearch>
					<SearchInput />
				</StyledSearch>
				<Wraper justifyContent='flex-end' className='header-icons'>
					<WrapperChild>
						<Span>
							<StyledLink to='/'>
								{location.pathname === "/" && !heart ? (
									<i className='bi bi-house-door-fill'></i>
								) : (
									<i className='bi bi-house-door'></i>
								)}
							</StyledLink>
						</Span>
						<Span>
							<StyledLink to='/inbox'>
								{location.pathname === "/inbox" && !heart ? (
									<i className='bi bi-chat-fill'></i>
								) : (
									<i className='bi bi-chat'></i>
								)}
							</StyledLink>
						</Span>
						<Span onClick={handleAddPost}>
							<i className='bi bi-plus-square'></i>
						</Span>
						<Span>
							{heart ? (
								<i onClick={handleHeart} className='bi bi-heart-fill'></i>
							) : (
								<i onClick={handleHeart} className='bi bi-heart'></i>
							)}
							<div style={{ marginLeft: "-310px", top: "10px" }}>
								<Overlay
									arrowLeft='314px'
									arrowTop='-6px'
									show={showSuggestions}
									handleClick={handleHeart}
								>
									{showSuggestions && (
										<PeopleSuggestion handleFollow={handleFollow} />
									)}
								</Overlay>
							</div>
						</Span>
						<Span show={showProfile}>
							<img
								onClick={handleProfile}
								src={currentUser.photoURL}
								alt='PP'
							/>
							<div style={{ marginLeft: "-150px", top: "10px" }}>
								<Overlay
									arrowLeft='155px'
									arrowTop='-6px'
									show={showProfile}
									handleClick={handleProfile}
								>
									<NavBarProfile
										handleProfile={handleProfile}
										handleLogOut={handleLogOut}
									/>
								</Overlay>
							</div>
						</Span>
					</WrapperChild>
				</Wraper>
			</StyledNavBar>
		</Container>
	);
}
