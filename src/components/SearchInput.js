import React, { useState, useRef } from "react";
import { Input, Span } from "./Styled/SearchInput.styled";

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
