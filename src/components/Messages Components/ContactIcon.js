import React from "react";
import {
	ContactIconContainer,
	ProfileDiv,
	Icon,
} from "../Styled/Message.styled";
export default function ContactIcon() {
	return (
		<ContactIconContainer>
			<ProfileDiv>
				<Icon>
					<i className='fas fa-user-circle'></i>
				</Icon>
				<p>Profil Name</p>
			</ProfileDiv>
		</ContactIconContainer>
	);
}
