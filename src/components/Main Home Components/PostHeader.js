import React from "react";
import {
	PostHeaderContainer,
	ProfileDiv,
	PostHeaderIcon,
} from "../Styled/MainHome.styled";
export default function PostHeader() {
	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<PostHeaderIcon>
					<i className='fas fa-user-circle'></i>
				</PostHeaderIcon>
				<p>Profil Name</p>
			</ProfileDiv>
			<div style={{ margin: "0 20px 0 0" }}>
				<i className='fas fa-ellipsis-h'></i>
			</div>
		</PostHeaderContainer>
	);
}
