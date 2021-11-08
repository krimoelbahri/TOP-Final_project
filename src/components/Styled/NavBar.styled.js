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
	width: 90%;
	height: 55px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 0 15px;
`;
export const StyledSearch = styled.div`
	font-size: 16px;
	min-width: 200px;
	height: 28px;
	line-height: 0;
	flex-direction: row;
	align-items: center;
	@media (max-width: 700px) {
		display: none;
	}
`;
export const Wraper = styled.div`
	width: calc(100% / 3);
	justify-content: ${(props) => props.justifyContent};

	@media (max-width: 700px) {
		width: calc(100% / 2);
		justify-content: space-evenly;
	}
`;
export const Span = styled.span`
	text-align: center;
	width: 22px;
	height: 22px;
	margin-left: 20px;
	border-radius: 50%;
	border: ${({ show }) => (show ? "1px solid black" : "none")};
	cursor: pointer;
	img {
		height: 90%;
		width: 90%;
		margin: 7% 0;
		border-radius: 50%;
	}
`;

export const WrapperChild = styled.div`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;
