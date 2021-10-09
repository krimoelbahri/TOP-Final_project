import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Main from "../components/Home Components/Main";

const Container = styled.div`
	min-width: 100%;
	overflow: hidden;
`;
export default function Home() {
	return (
		<Container>
			<NavBar />
			<Main />
		</Container>
	);
}
