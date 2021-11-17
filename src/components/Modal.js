import React from "react";
import {
	ModalContainer,
	ModalChildContainer,
	CloseModal,
} from "./Styled/Modal.styled";

export default function Modal(props) {
	const { isModalVisible, handleClose, children } = props;

	return (
		<ModalContainer isModalVisible={isModalVisible}>
			<CloseModal onClick={handleClose}>+</CloseModal>
			<ModalChildContainer>{children}</ModalChildContainer>
		</ModalContainer>
	);
}
