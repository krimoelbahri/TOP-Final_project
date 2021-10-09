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
	position: relative;
	box-sizing: border-box;
	display: flex;
`;
const MainContainer = styled.div`
	align-items: center;
	height: 100%;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
`;
const MessagesContainer = styled.div`
	align-items: center;
	height: 100%;
	width: 100%;
	max-width: 930px;
	background-color: #fff;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	position: relative;
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
