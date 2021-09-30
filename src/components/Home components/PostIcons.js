import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;
const Div = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 20px;
	align-items: center;
	font-size: 25px;
`;
const IconDiv = styled.div`
	margin-right: 20px;
`;

export default function PostIcons() {
	return (
		<Container>
			<Div>
				<IconDiv>
					<i className='far fa-heart'></i>
				</IconDiv>
				<IconDiv>
					<i className='bi bi-chat-right'></i>
				</IconDiv>
			</Div>
			<Div style={{ margin: "0 20px 0 0" }}>
				<diIconDivv>
					<i className='bi bi-bookmark'></i>{" "}
				</diIconDivv>
			</Div>
		</Container>
	);
}
