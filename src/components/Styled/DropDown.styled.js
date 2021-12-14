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
export const ProfileIcon = styled.div`
	width: 50px;
	height: 50px;
	margin: 0 10px;
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
`;
