import React from "react";
import LoginForm from "../components/Form Components/LoginForm";
import { Container, StyledLink } from "../components/Styled/Auth.styled";
import { FormConatiner } from "../components/Styled/Form.styled";
import { useAuth } from "../context/AuthContext";

export default function Login() {
	const { loginWithFacebook, login } = useAuth();
	async function handleFacebookLogin() {
		try {
			await loginWithFacebook();
		} catch (error) {
			console.log(error);
		}
	}
	async function handleEmailLogin(email, password) {
		try {
			await login(email, password);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Container>
			<LoginForm
				handleFacebookLogin={handleFacebookLogin}
				handleEmailLogin={handleEmailLogin}
			/>
			<FormConatiner>
				<div>
					<p>
						Don't have an account? <StyledLink to='/signup'>Sign up</StyledLink>
					</p>
				</div>
			</FormConatiner>
		</Container>
	);
}
