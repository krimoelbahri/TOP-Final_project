import React from "react";
import styled from "styled-components";

const FormButton = styled.button``;
export default function Button(props) {
    const {type}=props;
	return <FormButton type={type}></FormButton>;
}
