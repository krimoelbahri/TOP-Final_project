import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 55px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const ProfileDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 20px;
	align-items: center;
`;
const Icon = styled.div`
	width: 30px;
	height: 30px;
	font-size: 30px;
	margin: 0 10px;
	border: 1px solid #dbdbdb;
	border-radius: 50%;
`;
export default function PostHeader() {
	return (
		<Container>
			<ProfileDiv>
				<Icon>
					<i className='fas fa-user-circle'></i>
				</Icon>
				<p>Profil Name</p>
			</ProfileDiv>
			<div style={{ margin: "0 20px 0 0" }}>
				<i className='fas fa-ellipsis-h'></i>
			</div>
		</Container>
	);
}
