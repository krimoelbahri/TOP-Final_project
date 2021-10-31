import React from "react";
import NavBar from "../components/NavBar";
import { StyledSubmitButton } from "../components/Styled/Button";
import {
	Container,
	MainContainer,
	EditForm,
	ProfilePictureContainer,
	EditImage,
	UploadImageContainer,
} from "../components/Styled/EditProfile.styled";
import { useAuth } from "../context/AuthContext";
import { useStorage } from "../context/StorageContext";

export default function EditProfile() {
	const { currentUser } = useAuth();

	return (
		<Container>
			<NavBar />
			<MainContainer>
				<EditForm>
					<EditImage>
						<ProfilePictureContainer>
							<div>
								<img src={currentUser.photoURL} alt='PP' />
							</div>
						</ProfilePictureContainer>
						<UploadImageContainer>
							<h3> {currentUser.displayName} </h3>
							<StyledSubmitButton style={{ padding: 0 }} fontColor='#0095f6'>
								Change Profile Photo
							</StyledSubmitButton>
							<input style={{ display: "none" }} type='file'></input>
						</UploadImageContainer>
					</EditImage>
				</EditForm>
			</MainContainer>
		</Container>
	);
}
