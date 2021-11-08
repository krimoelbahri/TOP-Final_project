import React from "react";
import {
	ModalContainer,
	ModalChildContainer,
	ClosModal,
} from "./Styled/Modal.styled";

export default function Modal(props) {
	const { isModalVisible, handleClose, children } = props;

	return (
		<ModalContainer isModalVisible={isModalVisible}>
			<ClosModal onClick={handleClose}>+</ClosModal>
			<ModalChildContainer>{children}</ModalChildContainer>
		</ModalContainer>
	);
}
