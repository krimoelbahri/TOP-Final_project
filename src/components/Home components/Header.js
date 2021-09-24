import React from "react";
import styled from "styled-components";
import HeaderDiv from "../styledComponents/HederDiv";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 100%;
	height: 55px;
	border-bottom: 1px solid #dbdbdb;
	background-color: white;
	position: fixed;
	top: 0;
`;

const Wraper = styled.div`
	min-width: 300px;
	display: flex;
	justify-content: ${(props) => props.justifyContent};
`;
const Icon = styled.div`
	width: 20px;
	height: 20px;
	margin-left: 20px;
`;

export default function Header() {
	return (
		<Container>
			<HeaderDiv>
				<Wraper justifyContent='flex-start' className='header-logo'>
					Fakegram
				</Wraper>
				<Wraper justifyContent='center' className='header-logo'>
					<input type='text' placeholder='search'></input>
				</Wraper>
				<Wraper justifyContent='flex-end' className='header-logo'>
					<div>
						<Icon>
							<i className='bi bi-house-door'></i>
						</Icon>
						<Icon>
							<i className='bi bi-chat'></i>
						</Icon>
						<Icon>
							<i className='far fa-compass'></i>
						</Icon>
						<Icon>
							<i className='bi bi-heart'></i>
						</Icon>

						<Icon
							style={{
								border: "1px solid black",
								borderRadius: "50%",
							}}></Icon>
					</div>
				</Wraper>
			</HeaderDiv>
		</Container>
	);
}
