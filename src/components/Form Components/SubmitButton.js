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
		display,
	} = props;
	return (
		<StyledSubmitButton
			onClick={onClick}
			fontColor={fontColor}
			fontOpacity={fontOpacity}
			backgroundColor={backgroundColor}
			disabledBackgroundColor={disabledBackgroundColor}
			type={type}
			display={display}
			disabled={disabled}
		>
			{children}
		</StyledSubmitButton>
	);
}
