import styled from "styled-components";
export const Container = styled.div`
	padding-top: 54px;
	flex: 1;
	height: 100%;
	background-color: #fafafa;
	max-height: 100%;
`;
export const MainContainer = styled.div`
	align-items: center;
	height: 100%;
	padding: 20px;
	width: 100%;
`;
export const MessagesContainer = styled.div`
	align-items: center;
	height: 100%;
	width: 100%;
	max-width: 930px;
	background-color: #fff;
	flex-direction: row;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
`;
// Styling the area for showing Contacts
export const ContactsContainer = styled.div`
	height: 100%;
	width: 40%;
	border-right: 1px solid #dbdbdb;
	overflow: hidden;
`;
export const ContactsHeader = styled.div`
	width: 100%;
	min-height: 60px;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #dbdbdb;
`;
export const ContactsBody = styled.div`
	width: 100%;
	height: 100%;
	align-items: flex-start;
	justify-content: flex-start;
	overflow: auto;
`;
// Styling the area for showing Contacts Profiles Icons
export const ProfilesIconsContainer = styled.div`
	height: 100%;
	width: 100%;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 15px 15px 0 0;
`;
// Styling the area for showing the Profile Icon
export const ContactIconContainer = styled.div`
	width: 100%;
	height: 60px;
`;
export const ProfileDiv = styled.div`
	flex-direction: row;
	align-items: center;
	padding: 5px 10px 5px 15px;
`;
export const Icon = styled.div`
	width: 50px;
	height: 50px;
	font-size: 50px;
	margin: 0 5px;
	border-radius: 50%;
`;
