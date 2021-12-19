import React from "react";
import { Link } from "react-router-dom";
import { StyledSubmitButton } from "../components/Styled/Button";
import { ErrorContainer, Wrapper } from "../components/Styled/Error.styled";

export default function Error() {
	return (
		<ErrorContainer>
			<Wrapper>
				<h1>
					OOPS <i className='fas fa-exclamation-circle'></i>
				</h1>
				<h4>Something went wrong please try reloading, or check your network connection</h4>
				<Link to='/'>
					<StyledSubmitButton backgroundColor='#0095f6' fontColor='white'>
						Reload
					</StyledSubmitButton>
				</Link>
			</Wrapper>
		</ErrorContainer>
	);
}
