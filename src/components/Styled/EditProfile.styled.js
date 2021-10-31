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
export const EditForm = styled.form`
	display: flex;
	padding: 20px;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border: 1px solid #dbdbdb;
	border-radius: 5px;
`;
export const EditImage = styled.div`
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 60px;
`;
export const UploadImageContainer = styled.div`
	height: 100%;
	justify-content: space-evenly;
`;
export const ProfilePictureContainer = styled.div`
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
	margin-right: 30px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`;
