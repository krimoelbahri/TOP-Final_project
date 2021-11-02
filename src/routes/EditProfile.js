import React from "react";
import NavBar from "../components/NavBar";
import EditImage from "../components/Profile Components/EditImage";
import EditInfo from "../components/Profile Components/EditInfo";

import {
	Container,
	MainContainer,
	EditForm,
} from "../components/Styled/EditProfile.styled";

export default function EditProfile() {
	return (
		<Container>
			<NavBar />
			<MainContainer>
				<EditForm>
					<EditImage />
					<EditInfo />
				</EditForm>
			</MainContainer>
		</Container>
	);
}
