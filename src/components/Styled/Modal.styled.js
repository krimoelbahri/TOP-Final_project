import styled from "styled-components";
import { keyframes } from "styled-components";

const fade = keyframes`
	 from {
    opacity: 0;
    transform: scale3d(2, 2, 2);
  }

  50% {
    opacity: 1;
  }
`;
export const ModalContainer = styled.div`
	display: ${(props) => (props.isModalVisible ? "flex" : "none")};
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 50;
	top: 0;
`;
export const ModalChildContainer = styled.div`
	min-width: 100px;
	min-height: 100px;
	animation: ${fade} 200ms;
	background-color: #fff;
	border-radius: 10px;
	z-index: 100;
`;
export const CloseModal = styled.div`
	position: absolute;
	color: #fff;
	font-size: 50px;
	top: 20px;
	right: 20px;
	transform: rotate(45deg);
	cursor: pointer;
`;
export const AddPostHeader = styled.div`
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	border-bottom: 1px solid #bdbdbd;
	button {
		position: absolute;
		right: 5px;
	}
`;
export const AddPostBody = styled.div`
	align-items: center;
	justify-content: center;
	padding: 10px 10px;
	width: 350px;
	height: 350px;
	i {
		font-size: xxx-large;
	}
	div {
		margin-top: 15px;
	}
`;
export const SharePostBody = styled.div`
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 700px;
	height: 350px;
`;
export const ImageContainer = styled.div`
	align-items: center;
	justify-content: center;
	width: 50%;
	img {
		width: 100%;
		border-radius: 15px;
	}
`;
export const CaptionContainer = styled.div`
	align-items: center;
	justify-content: start;
	border-left: 1px solid #bdbdbd;
	width: 50%;
	height: 100%;
	textarea {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex: 4 0 auto;
		background: 0 0;
		border: 0;
		overflow: auto;
		padding: 0 16px;
		font-size: 16px;
		line-height: 24px;
		margin: 0;
		max-height: 168px;
		min-height: 167px;
		outline: 0;
		resize: none;
	}
`;
export const CaptionProfile = styled.div`
	flex-direction: row;
	align-items: center;
	width: calc(100% - 32px);
	margin: 0 16px;
	p {
		font-weight: bold;
	}
	div {
		margin: 10px 0;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		margin-right: 15px;

		img {
			height: 100%;
			width: 100%;
			border-radius: 50%;
		}
	}
`;
