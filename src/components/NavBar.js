import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Overlay from "./Overlay";
import styled from "styled-components";
import { Activity, Profile } from "./DropDown";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
	const [showActivity, setShowActivity] = useState(false);
	const [showProfile, setShowProfile] = useState(false);

	const location = useLocation();
	const { currentUser, logout } = useAuth();
	const handleLogOut = () => {
		logout();
	};

	//this will handle filling heart icon and showing activity dropdown
	const handleHeart = () => {
		setHeart(!heart);
		setShowActivity(!showActivity);
		if (showProfile) {
			setShowProfile(!showProfile);
		}
	};

	//this will handle showing profile dropdown
	const handleProfile = () => {
		setShowProfile(!showProfile);
		if (showActivity) {
			setShowActivity(!showActivity);
			setHeart(!heart);
		}
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
						<Span>
							{heart ? (
								<i onClick={handleHeart} className='bi bi-heart-fill'></i>
							) : (
								<i onClick={handleHeart} className='bi bi-heart'></i>
							)}
							<div style={{ marginLeft: "-310px", top: "10px" }}>
								<Overlay arrowLeft='314px' arrowTop='-6px' show={showActivity}>
									<Activity />
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
								<Overlay arrowLeft='155px' arrowTop='-6px' show={showProfile}>
									<Profile handleLogOut={handleLogOut} />
								</Overlay>
							</div>
						</Span>
					</WrapperChild>
				</Wraper>
			</StyledNavBar>
		</Container>
	);
}
