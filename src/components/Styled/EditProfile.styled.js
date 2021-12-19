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
	flex-direction: column;
	padding: 20px 20px 20px 100px;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border: 1px solid #dbdbdb;
	border-radius: 5px;
`;
export const EditImageContainer = styled.div`
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 60px;
`;
export const EditInfoContainer = styled.div`
	width: 100%;
	margin: 20px 0;
	label {
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 80%;
		line-height: 28px;
		margin: 10px 0;
		span {
			display: flex;
			width: 25%;
			margin-right: 30px;
			flex-direction: row;
			justify-content: flex-end;
			font-size: 16px;
		}
		input,
		textarea {
			border: 1px solid #dbdbdb;
			border-radius: 3px;
			padding: 0 15px;
			flex: 1 0 auto;
			height: 32px;
			margin: 0;
			overflow: hidden;
			resize: vertical;
		}
	}
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
	margin-left: 14%;
	div {
		width: 100%;
		height: 100%;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`;
export const Button = styled.span`
	background: 0 0;
	border: 0;
	box-sizing: border-box;
	cursor: pointer;
	font-weight: 600;
	padding: 5px 9px;
	text-align: center;
	width: auto;
`;
export const SubmitImageButton = styled(Button)`
	display: ${(props) => props.display};
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	color: ${(props) => props.fontColor};
	opacity: ${(props) => props.fontOpacity};
	position: relative;
	border: 1px solid transparent;
	background-color: ${(props) =>
		props.disabled ? props.disabledBackgroundColor : props.backgroundColor};
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	div {
		margin: 0 !important;
	}
`;
