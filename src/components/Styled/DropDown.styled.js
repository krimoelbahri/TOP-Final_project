import styled from "styled-components";
import { Link } from "react-router-dom";

export const PeopleSuggestionContainer = styled.div`
	width: 400px;
	min-height: 50px;
	border-radius: 5px;
	background-color: #fff;
`;
export const Wrapper = styled.div`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: calc(100% - 20px);
	margin: 10px;
	div {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	p {
		color: #8e8e8e;
		font-size: 14px;
		line-height: 18px;
	}
`;
export const LoaderWrapper = styled.div`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: calc(100% - 20px);
	margin: 10px;
	div {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
`;
export const ProfileIcon = styled.div`
	width: 30px;
	height: 30px;
	margin: 0 5px;
	border: 1px solid #dbdbdb;
	border-radius: 50%;
`;
export const Image = styled.img`
	border-radius: 50% !important;
	width: 100% !important;
	height: 100% !important;
	margin: none !important;
`;

export const ProfileContainer = styled.div`
	justify-content: space-between;
	align-items: flex-start;
	width: 200px;
	min-height: 50px;
	border-radius: 5px;
	background-color: #fff;
	padding: 10px 0;
	div {
		padding: 4px 15px;
		height: 50%;
		width: 100%;
		p {
			font-size: 15px;
			line-height: 15px;
			cursor: pointer;
			text-align: start;
		}
	}
`;
export const StyledLink = styled(Link)`
	color: black;
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	i {
		font-size: 14px;
		margin-right: 10px;
	}
	p {
		color: black;
		font-weight: bold;
	}
`;
export const SearchContainer = styled.div`
	justify-content: space-between;
	align-items: flex-start;
	width: 250px;
	max-height: 300px;
	border-radius: 5px;
	background-color: #fff;
	padding: 10px 0;
`;
export const RemoveContainer = styled.div`
	justify-content: space-between;
	align-items: center;
	width: 100px;
	border-radius: 5px;
	background-color: #fff;
	div {
		padding: 10px 15px;
		text-align: center;
		height: 50%;
		width: 100%;
		p {
			font-size: 15px;
			font-weight: bold;
			line-height: 15px;
			cursor: pointer;
		}
	}
`;
