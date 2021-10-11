import React from "react";
import { FacebookAuthProvider } from "firebase/auth";
import LoginForm from "../components/Form Components/LoginForm";
import styled from "styled-components";
import Container from "../components/Styled/FormConatiner";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	margin: 50px auto 10px;
`;
const StyledLink = styled(Link)`
	color: #0095f6;
	font-size: 14px;
	font-weight: 600;
	line-height: 18px;
`;
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
		<LoginContainer>
			<LoginForm handleFacebookLogin={handleFacebookLogin} />
			<Container>
				<div>
					<p
						style={{
							margin: "15px",
						}}>
						Don't have an account? <StyledLink to='/signup'>Sign up</StyledLink>
					</p>
				</div>
			</Container>
		</LoginContainer>
	);
}
