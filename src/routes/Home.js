import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main Home Components/Main";
import { Container } from "../components/Styled/Home.styled";


export default function Home() {
	return (
		<Container>
			<NavBar />
			<Main />
		</Container>
	);
}
