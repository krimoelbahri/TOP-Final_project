import { Link } from "react-router-dom";
import styled from "styled-components";

export const UsersContainer = styled.div`
	align-self: center;
	height: 100%;
	width: 100%;
	max-width: 600px;
	padding: 30px 15px 0 15px;
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
