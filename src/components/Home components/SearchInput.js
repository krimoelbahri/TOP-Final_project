import React, { useState, useRef } from "react";
import styled from "styled-components";
const Input = styled.input`
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
const Span = styled.span`
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
export default function SearchInput(props) {
	const { children } = props;
	const [searching, setSearching] = useState(false);
	const [inputvalue, setInputvalue] = useState("");
	const inputRef = useRef();
	function handleInputChange() {
		setInputvalue(inputRef.current.value);
	}
	return (
		<>
			{!searching && (
				<Span onClick={() => setSearching(true)}>
					<i className='bi bi-search'></i> {!inputvalue ? "Search" : inputvalue}
				</Span>
			)}
			{searching && (
				<Input
					onBlur={() => setSearching(false)}
					onChange={handleInputChange}
					type='text'
					ref={inputRef}
					value={inputvalue}
					autoFocus
					placeholder='Search'>
					{children}
				</Input>
			)}
		</>
	);
}
