import React from "react";
import LoginForm from "./Form Components/LoginForm";
import styled from "styled-components";
import Container from "./styledComponents/FormConatiner";
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
	function handleFacebookLogin() {
		console.log("yes");
		loginWithFacebook();
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
						Don't have an account?{" "}
						<StyledLink to='/signup'>Sign up</StyledLink>
					</p>
				</div>
			</Container>
		</LoginContainer>
	);
}
