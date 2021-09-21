import React from "react";
import styled from "styled-components";
const FormComponent = styled.form`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	border: 1px solid black;
`;
export default function Form(props) {
	const { onSubmit ,children} = props ;
	return <FormComponent onSubmit={onSubmit}>{children}</FormComponent>;
}
