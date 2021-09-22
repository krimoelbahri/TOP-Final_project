import React, { useState, useRef } from "react";
import styled from "styled-components";
import ButtonDiv from "./Form Components/ButtonDiv";
import Form from "./Form Components/Form";
import FormInput from "./Form Components/FormInput";
import InputDiv from "./Form Components/InputDiv";
import SubmitButton from "./Form Components/LoginButton";

const FormDiv = styled.div`
	margin: 0 40px 6px;
	width: 75%;
`;

const Label = styled.label`
	display: flex;
	height: 36px;
	flex: 1 0 0;
	padding: 0;
	position: relative;
	margin: 0;
	min-width: 0;
`;

export default function LoginForm() {
	const [disabled, setDisabled] = useState("disabled")
	const idRef = useRef();
	const passwordRef = useRef();
	function handleChange() {
		if (idRef.current.value && passwordRef.current.value.length > 6) {
			setDisabled(false);
		} else {
			setDisabled("disabled");
		}
	}
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<Form onSubmit={handleSubmit}>
			<h1 className='logo'>Fakegram</h1>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='loginId'>
						<FormInput
							onChange={handleChange}
							inputRef={idRef}
							inputID='loginId'
							ariaLabel='Phone number, username, or email'
							type='text'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='loginPassword'>
						<FormInput
							onChange={handleChange}
							inputRef={passwordRef}
							inputID='loginPassword'
							ariaLabel='password'
							type='password'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<ButtonDiv>
				<SubmitButton
					backgroundColor='#0095f6'
					disabledBackgroundColor='rgba(0,149,246,.3)'
					fontColor='#fff'
					type='submit'
					disabled={disabled}>
					<div>Log In</div>
				</SubmitButton>
			</ButtonDiv>
		</Form>
	);
}
