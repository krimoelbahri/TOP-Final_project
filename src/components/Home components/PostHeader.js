import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
    justify-content: space-between;
`;

export default function PostHeader() {
	return (
		<Container>
			<div></div>
			<div></div>
		</Container>
	);
}
