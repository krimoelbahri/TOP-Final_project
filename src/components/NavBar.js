import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Overlay from "./Overlay";
import styled from "styled-components";
import { PeopleSuggestion, NavBarProfile } from "./DropDown";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import {
	Container,
	StyledNavBar,
	StyledSearch,
	Wraper,
	WrapperChild,
	Span,
} from "./Styled/NavBar.styled";
import { handleFollowing } from "../Functions/handleFollow";
import { useDispatch } from "react-redux";
import { updateFollowing } from "../states/followers";

export const StyledLink = styled(Link)`
	color: black;
`;
export default function NavBar() {
	const [heart, setHeart] = useState(false);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const location = useLocation();
	const { currentUser, logout } = useAuth();
	const { userPic, setIsModalVisible, toggleBodyOverflow, setData, getData } = useData();
	const dispatch = useDispatch();

	const handleLogOut = () => {
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
		const obj = await handleFollowing(id, currentUser.uid, getData, setData);
		dispatch(updateFollowing(obj.following));
	};

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
							{currentUser.photoURL ? (
								<img onClick={handleProfile} src={currentUser.photoURL} alt='PP' />
							) : (
								<img onClick={handleProfile} src={userPic.current} alt='PP' />
							)}
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
