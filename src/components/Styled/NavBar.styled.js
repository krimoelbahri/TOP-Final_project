import styled from "styled-components";
export const Container = styled.div`
	align-items: center;
	min-width: 100%;
	height: 55px;
	border-bottom: 1px solid #dbdbdb;
	background-color: white;
	position: fixed;
	z-index: 10;
	top: 0;
`;
export const StyledNavBar = styled.div`
	max-width: 950px;
	height: 55px;
	align-items: center;
	flex-direction: row;
	padding: 0 15px;
`;
export const StyledSearch = styled.div`
	font-size: 16px;
	min-width: 150px;
	width: 200px;
	height: 28px;
	line-height: 0;
	flex-direction: row;
	align-items: center;
`;
export const Wraper = styled.div`
	min-width: 300px;
	justify-content: ${(props) => props.justifyContent};
	div {
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}
	span {
		width: 22px;
		height: 22px;
		margin-left: 20px;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
`;
