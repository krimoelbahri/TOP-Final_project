import React from "react";
import SignUpForm from "./Form Components/SignUpForm";
import styled from "styled-components";
import Container from "./styledComponents/FormConatiner";
const LoginContainer = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	margin: 50px auto 10px;
`;
const StyledLink = styled.a`
	color: #0095f6;
	font-size: 14px;
	font-weight: 600;
	line-height: 18px;
`;
export default function SignUp() {
	return (
		<LoginContainer>
			<SignUpForm />
			<Container>
				<div>
					<p
						style={{
							margin: "15px",
						}}>
						Have an account? <StyledLink href='/'>Log in</StyledLink>
					</p>
				</div>
			</Container>
		</LoginContainer>
	);
}