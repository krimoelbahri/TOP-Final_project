import React from "react";
import { EditInfoContainer } from "../Styled/EditProfile.styled";
export default function EditInfo() {
	return (
		<EditInfoContainer>
			<label htmlFor='Name'>
				<span>
					<strong>Name</strong>
				</span>
				<input type='text' value='Name'></input>
			</label>
		</EditInfoContainer>
	);
}
