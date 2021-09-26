import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	font-size: 16px;
	position: relative;
    min-width:150px;
	width: 200px;
    height:28px;
	flex-direction: row;
	align-items: center;
`;
export default function SearchDiv({ children }) {
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
