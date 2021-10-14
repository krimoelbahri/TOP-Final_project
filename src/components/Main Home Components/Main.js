import React from "react";
import Post from "./Post";
import { MainContainer } from "../Styled/MainHome.styled";

export default function Main() {
	return (
		<MainContainer>
			<Post />
			<Post />
			<Post />
		</MainContainer>
	);
}
