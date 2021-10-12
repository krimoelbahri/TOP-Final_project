import React from "react";
import SearchInput from "./SearchInput";
import { useAuth } from "../context/AuthContext";
import {
	Container,
	StyledNavBar,
	StyledSearch,
	Wraper,
} from "./Styled/NavBar.styled";

export default function NavBar() {
	const { currentUser } = useAuth();
	return (
		<Container>
			<StyledNavBar>
				<Wraper justifyContent='flex-start' className='header-logo'>
					Fakegram
				</Wraper>
				<StyledSearch>
					<SearchInput />
				</StyledSearch>
				<Wraper justifyContent='flex-end' className='header-icons'>
					<div>
						<span>
							<i className='bi bi-house-door'></i>
						</span>
						<span>
							<i className='bi bi-chat'></i>
						</span>
						<span>
							<i className='far fa-compass'></i>
						</span>
						<span>
							<i className='bi bi-heart'></i>
						</span>

						<span>
							<img src={currentUser.photoURL} alt='PP' />
						</span>
					</div>
				</Wraper>
			</StyledNavBar>
		</Container>
	);
}
