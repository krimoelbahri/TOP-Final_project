import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { useHistory } from "react-router";
import { useStorage } from "../context/StorageContext";
import { usePosts } from "../context/PostContaxt";
import { StyledSubmitButton } from "./Styled/Button";
import {
	AddPostHeader,
	AddPostBody,
	SharePostBody,
	ImageContainer,
	CaptionContainer,
	CaptionProfile,
} from "./Styled/Modal.styled";

export default function AddPost(props) {
	const [file, setFile] = useState("");
	const {
		display,
		setDisplay,
		image,
		setImage,
		sharing,
		setSharing,
		setIsModalVisible,
	} = props;
	return (
		<div>
			<PostHeader
				display={display}
				setSharing={setSharing}
				file={file}
				setIsModalVisible={setIsModalVisible}
			/>
			{!sharing && (
				<PostBody
					setFile={setFile}
					setImage={setImage}
					setSharing={setSharing}
					setDisplay={setDisplay}
				/>
			)}
			{sharing && <ShareBody image={image} />}
		</div>
	);
}

function PostHeader({ display, file, setIsModalVisible, setSharing }) {
	const { setData, toggleBodyOverflow } = useData();
	const { currentUser } = useAuth();
	const { currentUserPosts, userPost } = usePosts();
	const { uploadImages, DownloadImages } = useStorage();
	const history = useHistory();

	async function handleSubmit() {
		await uploadImages(`postepic/${currentUser.uid}/${file.name}`, file);
		let url = await DownloadImages(
			`postepic/${currentUser.uid}/${file.name}`,
		);
		let posts = currentUserPosts;
		posts.posts.push(userPost(currentUser.uid, "", url, 0, 0));
		await setData(currentUser.uid, "Posts", posts);
		history.push("/");
		setSharing(false);
		setIsModalVisible(false);
		toggleBodyOverflow();
	}
	return (
		<AddPostHeader>
			<h3>Create new post</h3>
			<StyledSubmitButton
				onClick={handleSubmit}
				display={display}
				fontColor='#0095f6'
			>
				Share
			</StyledSubmitButton>
		</AddPostHeader>
	);
}
function PostBody({ setImage, setSharing, setDisplay, setFile }) {
	const fileInput = useRef();

	function handleImageUpload() {
		fileInput.current.click();
	}
	function handleInputClick() {
		let image = fileInput.current.files[0];
		setFile(image);
		let imageUrl = URL.createObjectURL(image);
		setImage(imageUrl);
		setSharing(true);
		setDisplay("flex");
	}
	return (
		<AddPostBody>
			<i className='fas fa-photo-video'></i>
			<div>
				<h3>Add photos and videos here</h3>
			</div>
			<div>
				<label htmlFor='image-upload'>
					<StyledSubmitButton
						onClick={handleImageUpload}
						fontColor='#fff'
						backgroundColor='#0095f6'
					>
						Select from computer
					</StyledSubmitButton>
					<input
						id='image-upload'
						style={{ display: "none" }}
						type='file'
						ref={fileInput}
						onChange={handleInputClick}
					/>
				</label>
			</div>
		</AddPostBody>
	);
}
function ShareBody({ image }) {
	const { currentUser } = useAuth();

	return (
		<SharePostBody>
			<ImageContainer>
				<img src={image} alt='Post' />
			</ImageContainer>
			<CaptionContainer>
				<CaptionProfile>
					<div>
						<img src={currentUser.photoURL} alt=''></img>
					</div>
					<p> {currentUser.displayName}</p>
				</CaptionProfile>
				<textarea placeholder='Write a caption'></textarea>
			</CaptionContainer>
		</SharePostBody>
	);
}
