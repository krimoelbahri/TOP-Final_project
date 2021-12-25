import styled from "styled-components";
export const ProfilesContainer = styled.div`
	align-self: center;
	height: 100%;
	width: 100%;
	max-width: 930px;
	padding: 30px 15px 0 15px;
`;
//styling Profile Header section
export const ProfileHeaderContainer = styled.div`
	width: 100%;
	margin-bottom: 40px;
	flex-direction: row;
	align-items: center;
	flex: 0 1 auto;
`;
export const ProfilePictureContainer = styled.div`
	width: 30%;
	min-width: 200px;
	height: 100%;
	align-items: center;
	justify-content: center;
	padding: 0 2%;
	margin-right: 30px;
	div {
		height: 150px;
		width: 150px;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
`;
export const EditButton = styled.button`
	margin-right: 15px;
	padding: 4px 10px;
	background-color: white;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	font-weight: bold;
	cursor: pointer;
`;

export const ProfileInfoContainer = styled.div`
	width: calc(70% - 30px);
	min-width: 150px;
	height: 100%;
	align-items: flex-start;
	div,
	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		margin-bottom: 16px;
		h3 {
			margin-right: 15px;
		}

		li {
			margin-right: 30px;
			font-size: medium;
			span {
				font-weight: bold;
			}
		}
	}
`;
export const ProfileBio = styled.div`
	display: block !important;
	font-size: 16px;
	line-height: 24px;
	span {
		font-weight: bold;
	}
`;
//styling Profile Posts section
export const ProfilePostsContainer = styled.div`
	width: 100%;
`;
export const PostsHeader = styled.div`
	width: 100%;
	height: 50px;
	border-top: 1px solid #bebebe;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	div {
		height: 100%;
		padding: 5px;
		border-top: 1px solid black;
		margin-right: 15px;
		flex-direction: row;
		align-items: center;
		i {
			font-size: 12px;
		}
		span {
			font-size: 12px;
			font-weight: bold;
			margin-left: 10px;
		}
	}
`;
export const PostsContainer = styled.div`
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
`;
export const RatioContainer = styled.div`
	width: calc(100% / 3 - 10px);
	margin: 5px;

	/*@media (max-width: 930px) {
		height: calc(850px / 3 - 25px);
	}
	@media (max-width: 830px) {
		height: calc(700px / 3 - 25px);
	}
	@media (max-width: 730px) {
		height: calc(600px / 3 - 25px);
	}
	@media (max-width: 630px) {
		height: calc(500px / 3 - 25px);
	}
	@media (max-width: 530px) {
		height: calc(400px / 3 - 25px);
	}
	@media (max-width: 430px) {
		height: calc(300px / 3 - 25px);
	}
	img {
		min-width: 100%;
		height: 100%;
	}*/
`;
