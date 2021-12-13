import React from "react";
import {
	ActivityContainer,
	ProfileContainer,
	StyledLink,
} from "./Styled/DropDown.styled";

export function Activity() {
	return <ActivityContainer></ActivityContainer>;
}
export function Profile(props) {
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
