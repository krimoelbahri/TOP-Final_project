import React from "react";
import LoginForm from "../components/Form Components/LoginForm";
import { Container, StyledLink } from "../components/Styled/Auth.styled";
import { FacebookAuthProvider } from "firebase/auth";
import { FormConatiner } from "../components/Styled/Form.styled";
import { useAuth } from "../context/AuthContext";

export default function Login() {
	const { loginWithFacebook } = useAuth();
	async function handleFacebookLogin() {
		try {
			let result = await loginWithFacebook();
			const user = result.user;
			const credential = FacebookAuthProvider.credentialFromResult(result);
			const accessToken = credential.accessToken;
			console.log({ user, credential, accessToken });
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = FacebookAuthProvider.credentialFromError(error);
			console.log({ errorCode, errorMessage, email, credential });
		}
	}
	return (
		<Container>
			<LoginForm handleFacebookLogin={handleFacebookLogin} />
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
