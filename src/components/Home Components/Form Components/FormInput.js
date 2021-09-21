import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
	background: rgba(250, 250, 250, 1);
	border: 0;
	flex: 1 0 auto;
	margin: 0;
	outline: 0;
	overflow: hidden;
	padding: ${(props) => (props.animation ? "14px 0 2px 8px" : "9px 0 7px 8px")};
	font-size: ${(props) => (props.animation ? "12px" : "16px")};
	text-overflow: ellipsis;
`;
const Span = styled.span`
	color: rgba(142, 142, 142, 1);
	transform: ${(props) =>
		props.animation ? "scale(.83333) translateY(-10px)" : "none"};
	transition: transform ease-out 0.1s;
	transform-origin: left;
	font-family: sans-serif;
	font-size: 12px;
	height: 36px;
	left: 8px;
	line-height: 36px;
	overflow: hidden;
	pointer-events: none;
	position: absolute;
	right: 0;
	text-overflow: ellipsis;
`;
export default function FormInput(props, { children }) {
	const { ariaLabel, type, inputID } = props;
	const [inputValue, setinputValue] = useState();
	return (
		<>
			<Span animation={inputValue ? true : false}>{ariaLabel}</Span>
			<Input
				id={inputID}
				type={type}
				animation={inputValue ? true : false}
				onChange={(e) => {
					setinputValue(e.target.value);
				}}
				aria-label={ariaLabel}>
				{children}
			</Input>
		</>
	);
}
