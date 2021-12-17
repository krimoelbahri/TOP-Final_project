import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStorage } from "../../context/StorageContext";
import { useData } from "../../context/DataContext";
import {
	EditImageContainer,
	ProfilePictureContainer,
	UploadImageContainer,
} from "../Styled/EditProfile.styled";
import { StyledSubmitButton } from "../Styled/Button";

export default function EditImage(props) {
	const { data } = props;
	//using costum Hooks
	const { setData } = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const { uploadImages, DownloadImages } = useStorage();
	//using react Hooks
	const fileInput = useRef();
	const [loading, setLoading] = useState(false);

	function handleImageUpload() {
		fileInput.current.click();
	}
	function handleInputClick() {
		let image = fileInput.current.files[0];
		setLoading(true);
		try {
			uploadImages(`profilepic/${currentUser.uid}/profile-pic`, image).then(() => {
				DownloadImages(`profilepic/${currentUser.uid}/profile-pic`).then((url) => {
					updateProfileNameAndImage(currentUser.displayName, url).then(() => {
						setLoading(false);
						setData(currentUser.uid, "User", {
							...data,
							photoUrl: url,
						});
					});
				});
			});
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
						fontColor='#0095f6'
					>
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
