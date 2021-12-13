import styled from "styled-components";

export const MainContainer = styled.div`
	max-width: 600px;
	position: relative;
	padding-top: 60px;
	top: 55px;
	margin: 0 auto 100px;
`;
//Post styling
export const PostContainer = styled.div`
	flex-direction: column;
	width: 100%;
	height: inherit;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	margin: 20px 0 0 0;
`;
//Styling the Post's header
export const PostHeaderContainer = styled.div`
	width: 100%;
	height: 55px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const ProfileDiv = styled.div`
	flex-direction: row;
	margin-left: 20px;
	align-items: center;
`;
export const PostHeaderIcon = styled.div`
	width: 30px;
	height: 30px;
	font-size: 30px;
	margin: 0 10px;
	border: 1px solid #dbdbdb;
	border-radius: 50%;
	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
`;
//Styling the Icons area
export const IconsContainer = styled.div`
	width: 100%;
	height: 40px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;
export const IconsWraper = styled.div`
	flex-direction: row;
	margin: 0 0 0 20px;
	align-items: center;
	font-size: 25px;
	div {
		margin-right: 20px;
	}
	button {
		margin-right: 20px;
		border: none;
		font-size: 22px;
	}
	i {
		cursor: pointer;
	}
	i:hover {
		opacity: 0.5;
	}
`;

//Styling the comments area
export const CommentContainer = styled.div`
	height: 20px;
	flex-direction: row;
	align-items: center;
	padding-left: 20px;
`;
export const ViewCommentsLink = styled.a`
	padding-left: 20px;
	margin-top: 5px;
	color: #8e8e8e;
`;
export const AgeLink = styled(ViewCommentsLink)`
	font-size: 10px;
	margin-bottom: 15px;
`;
// Form Styling to add comments
export const CommentForm = styled.form`
	width: 100%;
	height: 55px;
	border-top: 1px solid #efefef;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const EmojiDiv = styled.div`
	flex-direction: row;
	margin-left: 15px;
	align-items: center;
`;
export const FormPostIcon = styled.div`
	width: 25px;
	height: 25px;
	font-size: 25px;
	margin: 0 10px;
	border: 1px solid #dbdbdb;
	border-radius: 50%;
`;
export const TextArea = styled.textarea`
	background: 0 0;
	border: 0;
	color: #262626;
	display: flex;
	flex-grow: 1;
	font-size: inherit;
	height: 18px;
	max-height: 80px;
	outline: 0;
	padding: 0;
	resize: none;
	width: 0;
`;
