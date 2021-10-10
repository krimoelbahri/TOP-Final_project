import React from "react";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import ContactsProfiles from "./ContactsProfiles";

const Container = styled.div`
	height: 100%;
	width: 40%;
	min-width: 350px;
	display: flex;
	flex-direction: column;
`;
const ContactHeader = styled.div`
	width: 100%;
	height: 70px;
	min-height: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-right: 1px solid #dbdbdb;
	border-bottom: 1px solid #dbdbdb;
`;
const ContactBody = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-right: 1px solid #dbdbdb;
	overflow: auto;
`;
export default function Contacts() {
	const { currentUser } = useAuth();
	return (
		<Container>
			<ContactHeader>
				<h4>{currentUser.displayName}</h4>
			</ContactHeader>
			<ContactBody>
				<ContactsProfiles />
			</ContactBody>
		</Container>
	);
}
