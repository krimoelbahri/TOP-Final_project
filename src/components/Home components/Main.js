import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`
	max-width: 600px;
	position: relative;
	padding-top: 60px;
	top: 55px;
	margin: 0 auto 100px;
`;

export default function Main() {
	return (
		<Container>
			<Post />
			<Post />
			<Post />
		</Container>
	);
}
