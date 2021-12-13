import React, { useState, useRef } from "react";
import Div from "../Styled/Div";
import {
	FormConatiner,
	Logo,
	FormDiv,
	Label,
	OrDiv,
	LineDiv,
} from "../Styled/Form.styled";
import FormInput from "./FormInput";
import InputDiv from "./InputDiv";
import SubmitButton from "./SubmitButton";

export default function SignUpForm(props) {
	const { handleFacebookLogin, handleEmailSignup } = props;
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
		handleEmailSignup(idRef.current.value, passwordRef.current.value);
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
					}}
				>
					Sign up to see photos and videos from your friends.
				</p>
			</Div>
			<Div flexDirection='column'>
				<SubmitButton
					onClick={handleFacebookLogin}
					display='flex'
					backgroundColor='#0095f6'
					fontColor='#fff'
					disabled=''
				>
					<i
						style={{
							marginRight: "10px",
							fontSize: "large",
						}}
						className='fab fa-facebook-square'
					></i>
					<div>Log In with Facebook</div>
				</SubmitButton>
			</Div>
			<OrDiv flexDirection='row'>
				<LineDiv />
				<h1
					style={{
						fontSize: "inherit",
						margin: "0 10px",
					}}
				>
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
							ariaLabel='Email'
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
							ariaLabel='Password'
							type='password'
						/>
					</Label>
				</InputDiv>
			</FormDiv>
			<Div flexDirection='column'>
				<SubmitButton
					onClick={handleSubmit}
					display='flex'
					backgroundColor='#0095f6'
					disabledBackgroundColor='rgba(0,149,246,.3)'
					fontColor='#fff'
					type='submit'
					disabled={disabled}
				>
					<div>Sign up</div>
				</SubmitButton>
			</Div>
			<Div>
				<p
					style={{
						color: "#8e8e8e",
						fontSize: "12px",
						textAlign: "center",
					}}
				>
					By signing up, you agree to our Terms , Data Policy and Cookies Policy
					.
				</p>
			</Div>
		</FormConatiner>
	);
}
