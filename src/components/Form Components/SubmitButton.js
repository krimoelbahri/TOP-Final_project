import React from "react";
import styled from "styled-components";
import { Button } from "../Styled Components/Button";

const StyledSubmitButton = styled(Button)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	color: ${(props) => props.fontColor};
	opacity: ${(props) => props.fontOpacity};
	position: relative;
	border: 1px solid transparent;
	background-color: ${(props) =>
		props.disabled ? props.disabledBackgroundColor : props.backgroundColor};
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
export default function SubmitButton(props) {
	const {
		fontColor,
		fontOpacity,
		backgroundColor,
		disabled,
		type,
		disabledBackgroundColor,
		children,
		onClick,
	} = props;
	return (
		<StyledSubmitButton
			onClick={onClick}
			fontColor={fontColor}
			fontOpacity={fontOpacity}
			backgroundColor={backgroundColor}
			disabledBackgroundColor={disabledBackgroundColor}
			type={type}
			disabled={disabled}>
			{children}
		</StyledSubmitButton>
	);
}
