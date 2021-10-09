import React from "react";
import SignUpForm from "../components/Form Components/SignUpForm";
import styled from "styled-components";
import Container from "../components/Styled Components/FormConatiner";
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
						Have an account? <StyledLink to='/login'>Log in</StyledLink>
					</p>
				</div>
			</Container>
		</LoginContainer>
	);
}