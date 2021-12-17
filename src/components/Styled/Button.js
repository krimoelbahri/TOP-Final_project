import styled from "styled-components";

export const Button = styled.button`
	background: 0 0;
	border: 0;
	box-sizing: border-box;
	cursor: pointer;
	font-weight: 600;
	padding: 5px 9px;
	text-align: center;
	width: auto;
`;
export const StyledSubmitButton = styled(Button)`
	display: ${(props) => props.display};
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	color: ${(props) => props.fontColor};
	opacity: ${(props) => props.fontOpacity};
	position: relative;
	border: 1px solid transparent;
	background-color: ${(props) =>
		props.disabled ? props.disabledBackgroundColor : props.backgroundColor};
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	div {
		margin: 0 !important;
	}
`;
