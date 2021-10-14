import styled from "styled-components";
export const Input = styled.input`
	background: rgba(250, 250, 250, 1);
	outline: 0;
	overflow: hidden;
	padding: 5px 5px 5px 26px;
	font-size: 16px;
	text-overflow: ellipsis;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	width: -webkit-fill-available;
`;
export const Span = styled.span`
	background: rgba(250, 250, 250, 1);
	color: rgba(142, 142, 142, 1);
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	padding: 7px;
	font-family: sans-serif;
	font-size: 14px;
	width: -webkit-fill-available;
	overflow: hidden;
	cursor: text;
	text-align: center;
	position: absolute;
	text-overflow: ellipsis;
`;