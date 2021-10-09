import React from "react";
import styled from "styled-components";
import Header from "../components/Home Components/Header";
import Main from "../components/Home Components/Main";

const Container = styled.div`
	min-width: 100%;
	overflow: hidden;
`;
export default function Messages() {
	return (
		<Container>
			<Header />
			<Main />
		</Container>
	);
}
