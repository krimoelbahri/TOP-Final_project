import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { StyledSubmitButton } from "./Styled/Button";
import {
	AddPostHeader,
	AddPostBody,
	SharePostBody,
	ImageContainer,
	CaptionContainer,
	CaptionProfile,
} from "./Styled/Modal.styled";
export default function AddPost() {
	const [display, setDisplay] = useState("none");
	const [sharing, setSharing] = useState(false);
	const [image, setImage] = useState("");
	return (
		<div>
			<PostHeader display={display} />
			{!sharing && (
				<PostBody
					setImage={setImage}
					setSharing={setSharing}
					setDisplay={setDisplay}
				/>
			)}
			{sharing && <ShareBody image={image} />}
		</div>
	);
}

function PostHeader({ display }) {
	return (
		<AddPostHeader>
			<h3>Create new post</h3>
			<StyledSubmitButton display={display} fontColor='#0095f6'>
				Share
			</StyledSubmitButton>
		</AddPostHeader>
	);
}
function PostBody({ setImage, setSharing, setDisplay }) {
	const fileInput = useRef();

	function handleImageUpload() {
		fileInput.current.click();
	}
	function handleInputClick() {
		let image = fileInput.current.files[0];
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
						backgroundColor='#0095f6'>
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
