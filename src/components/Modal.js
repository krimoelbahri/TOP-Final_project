import React from "react";
import { ModalContainer, ModalChildContainer, CloseModal, ModalDiv } from "./Styled/Modal.styled";

export default function Modal(props) {
	const { isModalVisible, handleClose, children } = props;

	return (
		<ModalContainer isModalVisible={isModalVisible}>
			<CloseModal onClick={handleClose}>+</CloseModal>
			<ModalDiv onClick={handleClose} />
			<ModalChildContainer>{children}</ModalChildContainer>
		</ModalContainer>
	);
}
