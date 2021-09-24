import React, { useState, useRef } from "react";
import styled from "styled-components";
import Div from "../styledComponents/Div";
import FormConatiner from "../styledComponents/FormConatiner";
import { Logo, FormDiv, Label } from "../styledComponents/FormStyledComponents";
import FormInput from "./FormInput";
import InputDiv from "./InputDiv";
import SubmitButton from "./SubmitButton";

const OrDiv = styled(Div)`
	color: #8e8e8e;
	align-items: center;
`;
const LineDiv = styled(Div)`
	margin: 0;
	border-top: 0.5pt solid #8e8e8e;
`;

export default function SignUpForm() {
	const [disabled, setDisabled] = useState("disabled");
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
		<FormConatiner onSubmit={handleSubmit}>
			<Logo className='logo'>Fakegram</Logo>
			<Div>
				<p
					style={{
						fontWeight: "600",
						color: "#8e8e8e",
						fontSize: "17px",
						textAlign: "center",
					}}>
					Sign up to see photos and videos from your friends.
				</p>
			</Div>
			<Div flexDirection='column'>
				<SubmitButton backgroundColor='#0095f6' fontColor='#fff' disabled=''>
					<i
						style={{
							marginRight: "10px",
							fontSize: "large",
						}}
						className='fab fa-facebook-square'></i>
					<div>Log In with Facebook</div>
				</SubmitButton>
			</Div>
			<OrDiv flexDirection='row'>
				<LineDiv />
				<h1
					style={{
						fontSize: "inherit",
						margin: "0 10px",
					}}>
					OR
				</h1>
				<LineDiv />
			</OrDiv>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='signUpId'>
						<FormInput
							onChange={handleChange}
							inputRef={idRef}
							inputID='signUpId'
							ariaLabel='Mobile Number or Email'
							type='text'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='SignUpName'>
						<FormInput
							onChange={handleChange}
							inputRef={passwordRef}
							inputID='SignUpName'
							ariaLabel='Full Name'
							type='text'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='SignUpUsername'>
						<FormInput
							onChange={handleChange}
							inputRef={passwordRef}
							inputID='SignUpUsername'
							ariaLabel='Username'
							type='text'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='signUpPassword'>
						<FormInput
							onChange={handleChange}
							inputRef={passwordRef}
							inputID='signUpPassword'
							ariaLabel='password'
							type='password'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<Div flexDirection='column'>
				<SubmitButton
					backgroundColor='#0095f6'
					disabledBackgroundColor='rgba(0,149,246,.3)'
					fontColor='#fff'
					type='submit'
					disabled={disabled}>
					<div>Sign up</div>
				</SubmitButton>
			</Div>
			<Div>
				<p
					style={{
						color: "#8e8e8e",
						fontSize: "12px",
						textAlign: "center",
					}}>
					By signing up, you agree to our Terms , Data Policy and Cookies Policy
					.
				</p>
			</Div>
		</FormConatiner>
	);
}
