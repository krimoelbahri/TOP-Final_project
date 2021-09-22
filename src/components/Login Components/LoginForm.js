import React, { useState, useRef } from "react";
import styled from "styled-components";
import Div from "../styledComponents/Div";
import FormConatiner from "../styledComponents/FormConatiner";
import FormInput from "./Form Components/FormInput";
import InputDiv from "./Form Components/InputDiv";
import SubmitButton from "./Form Components/SubmitButton";

const Logo = styled.h1`
	margin: 25px 0 49px 0;
`;
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
const OrDiv = styled(Div)`
	color: #8e8e8e;
	align-items: center;
`;
const LineDiv = styled(Div)`
	margin: 0;
	border-top: 0.5pt solid #8e8e8e;
`;
const StyledLink = styled.a`
	color: #00376b;
	font-size: 12px;
	line-height: 14px;
	margin-top: 12px;
	text-align: center;
`;
export default function LoginForm() {
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
			<Div flexDirection='column'>
				<SubmitButton
					backgroundColor='#0095f6'
					disabledBackgroundColor='rgba(0,149,246,.3)'
					fontColor='#fff'
					type='submit'
					disabled={disabled}>
					<div>Log In</div>
				</SubmitButton>
			</Div>
			<OrDiv flexDirection='row'>
				<LineDiv />
				<h1
					style={{
						"font-size": "inherit",
						margin: "0 10px",
					}}>
					OR
				</h1>
				<LineDiv />
			</OrDiv>
			<Div flexDirection='column'>
				<SubmitButton fontColor='#385185' disabled=''>
					<i
						style={{
							"margin-right": "10px",
							"font-size": "x-large",
						}}
						className='fab fa-facebook-square'></i>
					<div>Log In with Facebook</div>
				</SubmitButton>
			</Div>
			<StyledLink href='/'>
				<p>Forgot password?</p>
			</StyledLink>
		</FormConatiner>
	);
}
