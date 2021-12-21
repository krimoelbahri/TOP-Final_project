import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";
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
import Loader from "react-loader-spinner";

export default function AddPost(props) {
	const [file, setFile] = useState("");
	const [caption, setCaption] = useState("");

	const { display, setDisplay, image, setImage, sharing, setSharing, setIsModalVisible } = props;
	return (
		<div>
			<PostHeader
				display={display}
				setSharing={setSharing}
				file={file}
				caption={caption}
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
			{sharing && <ShareBody setCaption={setCaption} image={image} />}
		</div>
	);
}

function PostHeader({ display, file, setIsModalVisible, setSharing, caption }) {
	const [loading, setLoading] = useState(false);
	const { setData, getData, toggleBodyOverflow } = useData();
	const { currentUser } = useAuth();
	const { userPost } = usePosts();
	const { uploadImages, DownloadImages } = useStorage();
	const navigate = useNavigate();

	async function handleSubmit() {
		try {
			setLoading(true);
			let comment;
			caption ? (comment = [caption]) : (comment = []);
			await uploadImages(`postepic/${currentUser.uid}/${file.name}`, file);
			let url = await DownloadImages(`postepic/${currentUser.uid}/${file.name}`);
			let result = await getData(currentUser.uid, "Posts");
			let posts = result.data();
			posts.posts.push(userPost(posts.posts.length, currentUser.uid, url, [], comment));
			await setData(currentUser.uid, "Posts", posts);
			navigate("/");
			setSharing(false);
			setIsModalVisible(false);
			toggleBodyOverflow();
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<AddPostHeader>
			<h3>Create new post</h3>
			{!loading ? (
				<StyledSubmitButton onClick={handleSubmit} display={display} fontColor='#0095f6'>
					Share
				</StyledSubmitButton>
			) : (
				<StyledSubmitButton display={display} fontColor='#0095f6'>
					<Loader type='Oval' color='black' height={20} width={50} />
				</StyledSubmitButton>
			)}
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
function ShareBody({ image, setCaption }) {
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
				<textarea
					onChange={(e) => setCaption(e.target.value)}
					placeholder='Write a caption'
				></textarea>
			</CaptionContainer>
		</SharePostBody>
	);
}
