import React from "react";
import {
	Container,
	MainContainer,
	MessagesContainer,
} from "../components/Styled/Message.styled";
import NavBar from "../components/NavBar";
import Contacts from "../components/Messages Components/Contacts";
import Inbox from "../components/Messages Components/Inbox";

export default function Messages() {
	return (
		<Container>
			<NavBar />
			<MainContainer>
				<MessagesContainer>
					<Contacts />
					<Inbox />
				</MessagesContainer>
			</MainContainer>
		</Container>
	);
}
