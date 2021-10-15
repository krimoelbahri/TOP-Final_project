import React from "react";
import { ProfilesIconsContainer } from "../Styled/Message.styled";
import ContactIcon from "./ContactIcon";

export default function ContactsProfiles() {
	return (
		<ProfilesIconsContainer>
			<ContactIcon />
			<ContactIcon />
			<ContactIcon />
		</ProfilesIconsContainer>
	);
}
