import { Link } from "react-router-dom";
import styled from "styled-components";

export const UsersContainer = styled.div`
	align-self: center;
	align-items: center;
	overflow: auto;
	height: 100%;
	width: 100%;
	padding: 30px 15px 0 15px;
`;
export const Wrapper = styled.div`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: calc(600px - 20px);
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
	@media (max-width: 600px) {
		width: calc(100% - 20px);
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
	width: 50px;
	height: 50px;
	margin: 0 30px;
	border: 1px solid #dbdbdb;
	border-radius: 50%;
	@media (max-width: 500px) {
		width: 30px;
		height: 30px;
	}
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
