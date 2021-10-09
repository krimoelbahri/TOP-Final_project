import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const Container = styled.div`
	min-width: 100%;
	overflow: hidden;
`;
export default function Messages() {
	return (
		<Container>
			<NavBar />
		</Container>
	);
}
