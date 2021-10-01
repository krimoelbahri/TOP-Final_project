import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 20px;
`;

export default function Comment() {
	return (
		<Container>
			<span>
				<a href='/'>Profile_Name </a>
			</span>
			&nbsp;
			<span> Some Comments</span>
		</Container>
	);
}
