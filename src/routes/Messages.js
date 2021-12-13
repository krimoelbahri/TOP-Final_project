import React from "react";
import { MainContainer, MessagesContainer } from "../components/Styled/Message.styled";
import Contacts from "../components/Messages Components/Contacts";
import Inbox from "../components/Messages Components/Inbox";

export default function Messages() {
	return (
		<MainContainer>
			<MessagesContainer>
				<Contacts />
				<Inbox />
			</MessagesContainer>
		</MainContainer>
	);
}
