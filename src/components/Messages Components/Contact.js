import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: column;
`;
const ProfileDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px 10px 5px 15px;
`;
const Icon = styled.div`
	width: 50px;
	height: 50px;
	font-size: 50px;
	margin: 0 5px;
	border-radius: 50%;
`;
export default function Contact() {
	return (
		<Container>
			<ProfileDiv>
				<Icon>
					<i className='fas fa-user-circle'></i>
				</Icon>
				<p>Profil Name</p>
			</ProfileDiv>
		</Container>
	);
}
