import React from "react";
import {
	ContactsContainer,
	ContactsHeader,
	ContactsBody,
} from "../Styled/Message.styled";
import { useAuth } from "../../context/AuthContext";
import ContactsProfiles from "./ContactsProfiles";

export default function Contacts() {
	const { currentUser } = useAuth();
	return (
		<ContactsContainer>
			<ContactsHeader>
				<h4>{currentUser.displayName}</h4>
			</ContactsHeader>
			<ContactsBody>
				<ContactsProfiles />
			</ContactsBody>
		</ContactsContainer>
	);
}
