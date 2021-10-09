import React from "react";
import styled from "styled-components";
import SearchDiv from "../Styled Components/SearchDiv";
import HeaderDiv from "../Styled Components/HederDiv";
import SearchInput from "./SearchInput";
import { useAuth } from "../../context/AuthContext";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 100%;
	height: 55px;
	border-bottom: 1px solid #dbdbdb;
	background-color: white;
	position: fixed;
	z-index: 10;
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
const Img = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

export default function Header() {
	const { currentUser } = useAuth();
	return (
		<Container>
			<HeaderDiv>
				<Wraper justifyContent='flex-start' className='header-logo'>
					Fakegram
				</Wraper>
				<SearchDiv>
					<SearchInput />
				</SearchDiv>
				<Wraper justifyContent='flex-end' className='header-icons'>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}>
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
							}}>
							<Img src={currentUser.photoURL} alt='PP' />
						</Icon>
					</div>
				</Wraper>
			</HeaderDiv>
		</Container>
	);
}
