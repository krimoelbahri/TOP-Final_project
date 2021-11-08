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
	z-index: 100;
	top: 0;
`;
export const ModalChildContainer = styled.div`
	min-width: 100px;
	min-height: 100px;
	animation: ${fade} 200ms;
	background-color: #fff;
	border-radius: 10px;
`;
export const ClosModal = styled.div`
	position: absolute;
	color: #fff;
	font-size: 50px;
	top: 20px;
	right: 20px;
	transform: rotate(45deg);
	cursor: pointer;
`;
