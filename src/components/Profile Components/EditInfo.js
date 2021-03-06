import React from "react";
import { StyledSubmitButton } from "../Styled/Button";
import { EditInfoContainer } from "../Styled/EditProfile.styled";
import Loader from "react-loader-spinner";

export default function EditInfo(props) {
	const { handleSubmit, handleChange, data, loading } = props;

	return (
		<EditInfoContainer>
			<InfoInput onChange={handleChange} type='text' info='Name' value={data.Name} />
			<InfoInput onChange={handleChange} type='text' info='Username' value={data.Username} />
			<InfoInput onChange={handleChange} type='text' info='Website' value={data.Website} />
			<InfoTextarea onChange={handleChange} info='Bio' value={data.Bio} />
			<InfoInput
				onChange={handleChange}
				type='text'
				info='PhoneNumber'
				value={data.PhoneNumber}
			/>
			<StyledSubmitButton
				backgroundColor='#0095f6'
				disabledBackgroundColor='#0095f6'
				onClick={handleSubmit}
				fontColor='#fff'
				style={{
					width: "fit-content",
					alignSelf: "center",
				}}
				type='submit'
				disabled={loading}
			>
				{!loading ? "Submit" : <Loader type='Oval' color='white' height={20} width={50} />}
			</StyledSubmitButton>
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
			<input id={info} type={type} defaultValue={value} onChange={onChange}></input>
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
				id={info}
				style={{ height: "70px", padding: "5px 10px" }}
				defaultValue={value}
				onChange={onChange}
			></textarea>
		</label>
	);
}
