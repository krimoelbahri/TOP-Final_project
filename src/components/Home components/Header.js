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

