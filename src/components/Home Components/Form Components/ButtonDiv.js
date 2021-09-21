import React from "react";
import styled from "styled-components";

const Div = styled.div`
	margin: 8px 40px;
`;
export default function ButtonDiv({ children }) {
	return <Div>{children}</Div>;
}