import React from "react";
import Modal from "./Modal";
import { useData } from "../context/DataContext";
import AddPost from "./AddPost";

const PostModal = () => {
	const { isModalVisible, setIsModalVisible, toggleBodyOverflosw } = useData();

	function handleClose() {
		setIsModalVisible(false);
		toggleBodyOverflosw();
	}

	return (
		<Modal isModalVisible={isModalVisible} handleClose={handleClose}>
			<AddPost />
		</Modal>
	);
};
export default PostModal;
