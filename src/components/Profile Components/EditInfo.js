import React from "react";
import { useAuth } from "../../context/AuthContext";
import { EditInfoContainer } from "../Styled/EditProfile.styled";

export default function EditInfo() {
	const { currentUser } = useAuth();
	return (
		<EditInfoContainer>
			<InfoInput type='text' info='Name' value='Name' />
			<InfoInput type='text' info='Username' value={currentUser.displayName} />
			<InfoInput type='text' info='Website' value='Website' />
			<InfoTextarea info='Bio' value='Bio' />
			<InfoInput type='text' info='Email' value='Email' />
			<InfoInput type='text' info='Phone Number' value='Phone Number' />
		</EditInfoContainer>
	);
}
function InfoInput(props) {
	const { info, type, value, onChange } = props;
	return (
		<label htmlFor='Name'>
			<span>
				<strong>{info}</strong>
			</span>
			<input type={type} defaultValue={value} onChange={onChange}></input>
		</label>
	);
}
function InfoTextarea(props) {
	const { info, value, onChange } = props;
	return (
		<label htmlFor='Name'>
			<span>
				<strong>{info}</strong>
			</span>
			<textarea
				style={{ height: "70px", padding: "5px 10px" }}
				defaultValue={value}
				onChange={onChange}></textarea>
		</label>
	);
}
