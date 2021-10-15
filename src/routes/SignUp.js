import React from "react";
import SignUpForm from "../components/Form Components/SignUpForm";
import { Container, StyledLink } from "../components/Styled/Auth.styled";
import { FormConatiner } from "../components/Styled/Form.styled";

export default function SignUp() {
	return (
		<Container>
			<SignUpForm />
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
