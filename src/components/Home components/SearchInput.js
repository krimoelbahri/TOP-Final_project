import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
	background: rgba(250, 250, 250, 1);
	outline: 0;
	overflow: hidden;
	padding: 7px 5px 5px 26px;
	font-size: 16px;
	text-overflow: ellipsis;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	width: -webkit-fill-available;
`;
const Span = styled.span`
	color: rgba(142, 142, 142, 1);
	padding: 7px;
	font-family: sans-serif;
	font-size: 13px;
	width: -webkit-fill-available;
	overflow: hidden;
	cursor: text;
	text-align: center;
	position: absolute;
	text-overflow: ellipsis;
`;
export default function SearchInput(props) {
	const { type, placeHolder, children } = props;

	return (
		<>
			<Span>
				<i className='bi bi-search'></i> Search
			</Span>
			<Input type={type} placeholder={placeHolder}>
				{children}
			</Input>
		</>
	);
}
