import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	font-size: 14px;
	position: relative;
	width: 100%;
	flex-direction: row;
	align-items: center;
	background: rgba(250, 250, 250, 1);
	border: ${(props) =>
		!props.divFocus ? "1px solid rgba(219, 219, 219, 1)" : "1px solid black"};
	border-radius: 3px;
	box-sizing: border-box;
	color: rgba(38, 38, 38, 1);
`;
export default function InputDiv({ children }) {
	const [focus, setFocus] = useState(false);

	return (
		<Div
			onFocus={() => {
				setFocus(true);
			}}
			onBlur={() => {
				setFocus(false);
			}}
			divFocus={focus}>
			{children}
		</Div>
	);
}
