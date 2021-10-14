import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Contacts from "../components/Messages Components/Contacts";
import Inbox from "../components/Messages Components/Inbox";

const Container = styled.div`
	padding-top: 54px;
	flex: 1;
	height: 100%;
	background-color: #fafafa;
	max-height: 100%;
`;
const MainContainer = styled.div`
	align-items: center;
	height: 100%;
	padding: 20px;
	width: 100%;
`;
const MessagesContainer = styled.div`
	align-items: center;
	height: 100%;
	width: 100%;
	max-width: 930px;
	background-color: #fff;
	flex-direction: row;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
`;
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
