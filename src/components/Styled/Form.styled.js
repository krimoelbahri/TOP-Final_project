import styled from "styled-components";
import Div from "./Div";
export const FormConatiner = styled.div`
	max-width: 350px;
	align-items: center;
	justify-content: space-evenly;
	border: 1px solid #dbdbdb;
	padding: 10px 0;
	margin-bottom: 10px;
	background-color: white;
	p {
		margin: 15px;
	}
`;
export const InputContainer = styled.div`
	font-size: 14px;
	position: relative;
	width: 100%;
	flex-direction: row;
	align-items: center;
	background: rgba(250, 250, 250, 1);
	border: ${(props) =>
		!props.divFocus ? "1px solid rgba(219, 219, 219, 1)" : "1px solid black"};
	border-radius: 3px;
	color: rgba(38, 38, 38, 1);
`;
export const Input = styled.input`
	background: rgba(250, 250, 250, 1);
	border: 0;
	flex: 1 0 auto;
	margin: 0;
	outline: 0;
	overflow: hidden;
	padding: ${(props) => (props.animation ? "14px 0 2px 8px" : "9px 0 7px 8px")};
	font-size: ${(props) => (props.animation ? "12px" : "16px")};
	text-overflow: ellipsis;
`;
export const Span = styled.span`
	color: rgba(142, 142, 142, 1);
	transform: ${(props) => (props.animation ? "scale(.83333) translateY(-10px)" : "none")};
	transition: transform ease-out 0.1s;
	transform-origin: left;
	font-family: sans-serif;
	font-size: 12px;
	height: 36px;
	left: 8px;
	line-height: 36px;
	overflow: hidden;
	pointer-events: none;
	position: absolute;
	right: 0;
	text-overflow: ellipsis;
`;
export const StyledLink = styled.a`
	color: #00376b;
	font-size: 12px;
	line-height: 14px;
	margin-top: 12px;
	text-align: center;
`;
export const Logo = styled.h1`
	margin: 30px 0 30px 0;
`;
export const FormDiv = styled.div`
	margin: 0 40px 6px;
	width: 75%;
`;
export const Label = styled.label`
	display: flex;
	height: 36px;
	flex: 1 0 0;
	padding: 0;
	position: relative;
	margin: 0;
	min-width: 0;
`;
export const OrDiv = styled(Div)`
	color: #8e8e8e;
	align-items: center;
`;
export const LineDiv = styled(Div)`
	margin: 0;
	border-top: 0.5pt solid #8e8e8e;
	width: 42%;
`;
