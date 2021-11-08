import React from "react";
import Modal from "./Modal";
import { useData } from "../context/DataContext";

const PostModal = () => {
	const { isModalVisible, setIsModalVisible, toggleBodyOverflosw } = useData();
	function handleClose() {
		setIsModalVisible(false);
		toggleBodyOverflosw();
	}
	return (
		<Modal isModalVisible={isModalVisible} handleClose={handleClose}></Modal>
	);
};
export default PostModal;
