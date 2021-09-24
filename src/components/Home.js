import React from "react";
import styled from "styled-components";
import Header from "./Home components/Header";
const Container = styled.div`
	min-width: 100%;
	overflow:hidden;

`;
export default function Home() {
	return (
		<Container>
			<Header />
		</Container>
	);
}
