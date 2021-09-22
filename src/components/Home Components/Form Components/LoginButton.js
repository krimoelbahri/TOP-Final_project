import React from "react";
import styled from "styled-components";
import { Button } from "../../styledComponents/Button";

const StyledSubmitButton = styled(Button)`
	border-radius: 4px;
	color: ${(props) => props.fontColor};
	position: relative;
	border: 1px solid transparent;
	background-color: ${(props) =>props.disabled?props.disabledBackgroundColor: props.backgroundColor};
    cursor: ${(props) =>props.disabled?"default": "pointer"};
`;
export default function SubmitButton(props) {
	const { fontColor, backgroundColor, disabled, type,disabledBackgroundColor, children } = props;
	return (
		<StyledSubmitButton
			fontColor={fontColor}
			backgroundColor={backgroundColor}
            disabledBackgroundColor={disabledBackgroundColor}
			type={type}
			disabled={disabled}>
			{children}
		</StyledSubmitButton>
	);
}
