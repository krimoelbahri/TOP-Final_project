import React from "react";
import {
	PostHeaderContainer,
	ProfileDiv,
	PostHeaderIcon,
} from "../Styled/MainHome.styled";
export default function PostHeader({ userPhoto, userName }) {
	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<PostHeaderIcon>
					<img src={userPhoto} alt='pp' />
				</PostHeaderIcon>
				<p>{userName}</p>
			</ProfileDiv>
			<div style={{ margin: "0 20px 0 0" }}>
				<i className='fas fa-ellipsis-h'></i>
			</div>
		</PostHeaderContainer>
	);
}
