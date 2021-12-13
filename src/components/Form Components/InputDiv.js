import React, { useState } from "react";
import { InputContainer } from "../Styled/Form.styled";

export default function InputDiv({ children }) {
	const [focus, setFocus] = useState(false);

	return (
		<InputContainer
			onFocus={() => {
				setFocus(true);
			}}
			onBlur={() => {
				setFocus(false);
			}}
			divFocus={focus}
		>
			{children}
		</InputContainer>
	);
}
