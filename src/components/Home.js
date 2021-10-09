import React from "react";
import styled from "styled-components";
import Header from "./Home Components/Header";
import Main from "./Home Components/Main";

const Container = styled.div`
	min-width: 100%;
	overflow: hidden;
`;
export default function Home() {
	return (
		<Container>
			<Header />
			<Main />
		</Container>
	);
}
