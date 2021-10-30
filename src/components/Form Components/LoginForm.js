import React, { useState, useRef } from "react";
import Div from "../Styled/Div";
import {
	FormConatiner,
	Logo,
	FormDiv,
	Label,
	OrDiv,
	LineDiv,
	StyledLink,
} from "../Styled/Form.styled";
import FormInput from "./FormInput";
import InputDiv from "./InputDiv";
import SubmitButton from "./SubmitButton";

export default function LoginForm(props) {
	const { handleFacebookLogin, handleEmailLogin } = props;
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
	function handleSubmit() {
		handleEmailLogin(idRef.current.value, passwordRef.current.value);
	}
	return (
		<FormConatiner>
			<Logo className='logo'>Fakegram</Logo>
			<FormDiv>
				<InputDiv>
					<Label htmlFor='loginId'>
						<FormInput
							onChange={handleChange}
							inputRef={idRef}
							inputID='loginId'
							ariaLabel='Email'
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
							ariaLabel='Password'
							type='password'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<Div flexDirection='column'>
				<SubmitButton
					onClick={handleSubmit}
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
