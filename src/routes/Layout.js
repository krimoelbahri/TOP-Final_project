import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "../components/Styled/Home.styled";
import { useData } from "../context/DataContext";

export default function Layout() {
	const { navBarLoading } = useData();
	return (
		<Container>
			<NavBar loading={navBarLoading} />
			<Outlet />
		</Container>
	);
}
