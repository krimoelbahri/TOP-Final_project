import React from "react";
import { StyledSubmitButton } from "../Styled/Button";

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
