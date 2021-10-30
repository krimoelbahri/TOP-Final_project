import styled from "styled-components";
import { Link } from "react-router-dom";

export const ActivityContainer = styled.div`
	width: 400px;
	min-height: 50px;
	border-radius: 5px;
	background-color: #fff;
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
