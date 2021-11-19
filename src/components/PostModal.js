import React, { useState } from "react";
import Modal from "./Modal";
import { useData } from "../context/DataContext";
import AddPost from "./AddPost";

const PostModal = () => {
	const [display, setDisplay] = useState("none");
	const [sharing, setSharing] = useState(false);
	const [image, setImage] = useState("");
	const { isModalVisible, setIsModalVisible, toggleBodyOverflow } = useData();

	function handleClose() {
		if (image) {
			let T = global.confirm("do you want to continue");
			if (T) {
				setIsModalVisible(false);
				setImage("");
				setSharing(false);
				setDisplay("none");
				toggleBodyOverflow();
			}
		} else {
			setIsModalVisible(false);
			toggleBodyOverflow();
		}
	}

	return (
		<Modal isModalVisible={isModalVisible} handleClose={handleClose}>
			<AddPost
				setIsModalVisible={setIsModalVisible}
				display={display}
				setDisplay={setDisplay}
				sharing={sharing}
				setSharing={setSharing}
				image={image}
				setImage={setImage}
			/>
		</Modal>
	);
};
export default PostModal;
