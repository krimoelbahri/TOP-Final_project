import React from "react";
import styled from "styled-components";
import Button from "./Form Components/Button";
import ButtonDiv from "./Form Components/ButtonDiv";
import Form from "./Form Components/Form";
import FormInput from "./Form Components/FormInput";
import InputDiv from "./Form Components/InputDiv";

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
							inputID='loginPassword'
							ariaLabel='password'
							type='password'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<ButtonDiv>
				<Button type="submit"></Button>
			</ButtonDiv>
		</Form>
	);
}
