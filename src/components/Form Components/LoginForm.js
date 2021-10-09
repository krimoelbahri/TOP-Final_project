import React, { useState, useRef } from "react";
import styled from "styled-components";
import Div from "../Styled Components/Div";
import FormConatiner from "../Styled Components/FormConatiner";
import { Logo, FormDiv, Label } from "../Styled Components/FormStyledComponents";
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
const StyledLink = styled.a`
	color: #00376b;
	font-size: 12px;
	line-height: 14px;
	margin-top: 12px;
	text-align: center;
`;
export default function LoginForm(props) {
	const { handleFacebookLogin } = props;
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
						fontSize: "inherit",
						margin: "0 10px",
					}}>
					OR
				</h1>
				<LineDiv />
			</OrDiv>
			<Div flexDirection='column'>
				<SubmitButton
					onClick={handleFacebookLogin}
					fontColor='#385185'
					disabled=''>
					<i
						style={{
							marginRight: "10px",
							fontSize: "x-large",
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
