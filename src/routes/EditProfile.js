import React from "react";
import NavBar from "../components/NavBar";
import EditImage from "../components/Profile Components/EditImage";
import EditInfo from "../components/Profile Components/EditInfo";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router";
import {
	Container,
	MainContainer,
	EditForm,
} from "../components/Styled/EditProfile.styled";

export default function EditProfile() {
	//using Custom Hooks
	const { setData, currentUserData,editedData ,setEditedData} = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const history = useHistory();
	//using react Hooks

	function handleChange(e) {
		setEditedData({ ...editedData, [e.target.id]: e.target.value });
	}
	async function handleSubmit() {
		await updateProfileNameAndImage(editedData.Username, currentUser.photoURL);
		await setData(currentUser.uid, "User", {
			...currentUserData,
			...editedData,
			photoUrl: currentUser.photoURL,
		});
		history.push("/profile");
	}

	return (
		<Container>
			<NavBar />

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
		</Container>
	);
}
