import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	margin: 50px auto 10px;
`;
export const StyledLink = styled(Link)`
	color: #0095f6;
	font-size: 14px;
	font-weight: 600;
	line-height: 18px;
`;
