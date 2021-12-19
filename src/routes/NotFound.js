import React from "react";
import { Link } from "react-router-dom";
import { StyledSubmitButton } from "../components/Styled/Button";
import { ErrorContainer, Wrapper } from "../components/Styled/Error.styled";
export default function NotFound() {
	return (
		<ErrorContainer>
			<Wrapper>
				<i style={{ fontSize: "70px" }} className='far fa-frown'></i>
				<h2>Sorry, this page isn't available.</h2>
				<Link to='/'>
					<StyledSubmitButton backgroundColor='#dbdbdb' fontColor='black'>
						Return
					</StyledSubmitButton>
				</Link>
			</Wrapper>
		</ErrorContainer>
	);
}
