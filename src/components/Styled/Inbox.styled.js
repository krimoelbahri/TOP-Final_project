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
	padding-top: 40px;
	justify-content: flex-end;
`;
export const MainConversationContainer = styled.div`
	height: 100%;
	width: 100%;
	flex: 1 1 auto;
	justify-content: flex-end;
`;
// Form Styling to send Messages
export const SendMessageForm = styled.form`
	min-height: 40px;
	display: flex;
	flex: 0 0 auto;
	margin: 15px 15px;
	font-size: large;
	box-sizing: border-box;
	border: 1px solid #dbdbdb;
	border-radius: 20px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const EmojiDiv = styled.div`
	flex-direction: row;
	margin-left: 15px;
	align-items: center;
	div {
		width: 25px;
		height: 25px;
		font-size: 25px;
		margin: 0 15px 0 0;
		border-radius: 50%;
	}
`;
export const TextArea = styled.textarea`
	background: 0 0;
	border: 0;
	color: #262626;
	display: flex;
	flex-grow: 1;
	font-size: 14px;
	height: 18px;
	max-height: 80px;
	outline: 0;
	padding: 0;
	resize: none;
	width: 0;
`;
//styling the component that shows the messages

export const MappingConversationContainer = styled.div`
	padding: 20px 20px 0;
	flex: 0 1 auto;
	overflow-x: hidden;
	overflow-y: auto;
`;
export const MessageContainer = styled.div`
	flex: 0 0 auto;
	flex-direction: row;
	justify-content: flex-end;
`;
export const MessageWrapper = styled.div`
	border: 1px solid #efefef;
	min-height: 40px;
	border-radius: 20px;
	background-color: #efefef;
	padding: 15px;
	margin-bottom: 10px;
`;
