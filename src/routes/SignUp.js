import React from "react";
import SignUpForm from "../components/Form Components/SignUpForm";
import { Container, StyledLink } from "../components/Styled/Auth.styled";
import { FormConatiner } from "../components/Styled/Form.styled";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
	const { loginWithFacebook, signup } = useAuth();
	async function handleFacebookLogin() {
		try {
			await loginWithFacebook();
		} catch (error) {
			console.log(error);
		}
	}
	async function handleEmailSignup(email, password) {
		try {
			await signup(email, password);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Container>
			<SignUpForm
				handleFacebookLogin={handleFacebookLogin}
				handleEmailSignup={handleEmailSignup}
			/>
			<FormConatiner>
				<div>
					<p>
						Have an account? <StyledLink to='/login'>Log in</StyledLink>
					</p>
				</div>
			</FormConatiner>
		</Container>
	);
}
