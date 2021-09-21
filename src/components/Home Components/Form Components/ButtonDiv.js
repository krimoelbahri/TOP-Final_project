import React from "react";
import styled from "styled-components";

const Div = styled.div`
	margin: 8px 40px;
	width: 75%;
	display: flex;
	flex-direction: column;
	padding: 0;
`;
export default function ButtonDiv({ children }) {
	return <Div>{children}</Div>;
}
