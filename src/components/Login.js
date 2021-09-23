import React from "react";
import LoginForm from "./Form Components/LoginForm";
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
export default function Login() {
	return (
		<LoginContainer>
			<LoginForm />
			<Container>
				<div>
					<p
						style={{
							margin: "15px",
						}}>
						Don't have an account? <StyledLink href='/'>Sign up</StyledLink>
					</p>
				</div>
			</Container>
		</LoginContainer>
	);
}
