import styled from "styled-components";
export const Input = styled.input`
	background: rgba(250, 250, 250, 1);
	box-sizing: border-box;
	outline: 0;
	overflow: hidden;
	padding: 4px 4px 4px 26px;
	font-size: 14px;
	text-overflow: ellipsis;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	width: 250px;
	height: 36px;
`;
export const Span = styled.span`
	background: rgba(250, 250, 250, 1);
	color: rgba(142, 142, 142, 1);
	box-sizing: border-box;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	padding: 6px 7px;
	font-family: sans-serif;
	font-size: 14px;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	overflow: hidden;
	cursor: text;
	position: absolute;
	text-overflow: ellipsis;
	i {
		font-size: 10px;
		padding: 5px;
	}
`;
