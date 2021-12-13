import React from "react";
import EditImage from "../components/Profile Components/EditImage";
import EditInfo from "../components/Profile Components/EditInfo";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { MainContainer, EditForm } from "../components/Styled/EditProfile.styled";

export default function EditProfile() {
	//using Custom Hooks
	const { setData, currentUserData, editedData, setEditedData } = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const navigate = useNavigate();
	//using react Hooks

	function handleChange(e) {
		setEditedData({ ...editedData, [e.target.id]: e.target.value });
	}
	async function handleSubmit(e) {
		e.preventDefault();
		await updateProfileNameAndImage(editedData.Username, currentUser.photoURL);
		await setData(currentUser.uid, "User", {
			...currentUserData,
			...editedData,
			photoUrl: currentUser.photoURL,
		});
		navigate("/profile");
	}

	return (
		<MainContainer>
			<EditForm>
				<EditImage data={currentUserData} />
				<EditInfo
					data={currentUserData}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			</EditForm>
		</MainContainer>
	);
}
