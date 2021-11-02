import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStorage } from "../../context/StorageContext";
import {
	EditImageContainer,
	ProfilePictureContainer,
	UploadImageContainer,
} from "../Styled/EditProfile.styled";
import { StyledSubmitButton } from "../Styled/Button";

export default function EditImage() {
	const [loading, setLoading] = useState(false);
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const { uploadImages, DownloadImages } = useStorage();
	const fileInput = useRef();

	function handleImageUpload() {
		fileInput.current.click();
	}
	function handleInputClick() {
		let image = fileInput.current.files[0];
		setLoading(true);
		try {
			uploadImages(`profilepic/${currentUser.uid}/profile-pic.jpg`, image).then(
				() => {
					DownloadImages(`profilepic/${currentUser.uid}/profile-pic.jpg`).then(
						(url) => {
							updateProfileNameAndImage(currentUser.displayName, url).then(
								() => {
									console.log(currentUser);
									setLoading(false);
								}
							);
						}
					);
				}
			);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}
	return (
		<EditImageContainer>
			<ProfilePictureContainer>
				{!loading ? (
					<div>
						<img src={currentUser.photoURL} alt='PP' />
					</div>
				) : (
					<div>
						<img src='/' alt='Loading' />
					</div>
				)}
			</ProfilePictureContainer>
			<UploadImageContainer>
				<h3> {currentUser.displayName} </h3>
				<label htmlFor='image-upload'>
					<StyledSubmitButton
						onClick={handleImageUpload}
						style={{ padding: 0 }}
						fontColor='#0095f6'>
						Change Profile Photo
					</StyledSubmitButton>
					<input
						id='image-upload'
						style={{ display: "none" }}
						type='file'
						ref={fileInput}
						onChange={handleInputClick}
					/>
				</label>
			</UploadImageContainer>
		</EditImageContainer>
	);
}
