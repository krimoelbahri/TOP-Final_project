import styled from "styled-components";
export const InboxContainer = styled.div`
	height: 100%;
	width: 60%;
`;
//styling for default page when no conversation is shown
export const InboxDefaultContainer = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;
export const InboxDefaultIcon = styled.div`
	font-size: 100px;
	align-items: center;
	justify-content: center;
	p {
		font-size: x-large;
		padding: 20px;
	}
`;
//styling conversation components
export const InboxHeader = styled.div`
	width: 100%;
	min-height: 60px;
	align-items: flex-start;
	justify-content: center;
	border-bottom: 1px solid #dbdbdb;
	position: absolute;
`;
export const ConversationContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: auto;
`;
