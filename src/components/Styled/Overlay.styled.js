import { keyframes, css } from "styled-components";
import styled from "styled-components";
const fade = keyframes`
	from {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const fadeOut = keyframes`
	from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }
`;
const animation = () => css`
	animation: ${fade} 200ms;
`;
const animationOut = () => css`
	animation: ${fadeOut} 200ms;
`;
export const OverlayContainer = styled.div`
	display: ${({ show }) => (show ? "block" : "none")};
	${({ show }) => (show ? animation : animationOut)};
	background: rgba(255, 255, 255, 1);
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
	border-radius: 6px;
	position: absolute;
	z-index: 3;
`;
export const Arrow = styled.div`
	top: ${({ top }) => top};
	bottom: ${({ bottom }) => bottom};
	right: ${({ right }) => right};
	left: ${({ left }) => left};
	background: #fff;
	border: 1px solid #fff;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
	height: 14px;
	position: absolute;
	transform: rotate(45deg);
	width: 14px;
`;
