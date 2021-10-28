import React, { useState } from "react";
import SearchInput from "./SearchInput";
import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
	Container,
	StyledNavBar,
	StyledSearch,
	Wraper,
} from "./Styled/NavBar.styled";

export const StyledLink = styled(Link)`
	color: black;
`;
export default function NavBar() {
	const [heart, setHeart] = useState(false);
	const location = useLocation();
	const { currentUser } = useAuth();
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
					<div>
						<span>
							<StyledLink to='/'>
								{location.pathname === "/" && !heart ? (
									<i className='bi bi-house-door-fill'></i>
								) : (
									<i className='bi bi-house-door'></i>
								)}
							</StyledLink>
						</span>
						<span>
							<StyledLink to='/inbox'>
								{location.pathname === "/inbox" && !heart ? (
									<i class='bi bi-chat-fill'></i>
								) : (
									<i className='bi bi-chat'></i>
								)}
							</StyledLink>
						</span>
						<span>
							{heart ? (
								<i className='bi bi-heart-fill'></i>
							) : (
								<i onClick={() => setHeart(true)} className='bi bi-heart'></i>
							)}
						</span>
						<span>
							<StyledLink to='/profile'>
								<img src={currentUser.photoURL} alt='PP' />
							</StyledLink>
						</span>
					</div>
				</Wraper>
			</StyledNavBar>
		</Container>
	);
}
