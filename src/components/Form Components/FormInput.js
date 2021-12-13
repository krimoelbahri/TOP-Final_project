import React, { useState } from "react";
import { Input, Span } from "../Styled/Form.styled";

export default function FormInput(props) {
	const { ariaLabel, inputRef, type, inputID, onChange, children } = props;
	const [inputValue, setinputValue] = useState();
	return (
		<>
			<Span animation={inputValue ? true : false}>{ariaLabel}</Span>
			<Input
				ref={inputRef}
				id={inputID}
				type={type}
				animation={inputValue ? true : false}
				onChange={(e) => {
					setinputValue(e.target.value);
					onChange();
				}}
				aria-label={ariaLabel}
			>
				{children}
			</Input>
		</>
	);
}
