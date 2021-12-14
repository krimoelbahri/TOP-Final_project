import React from "react";
import { Link } from "react-router-dom";
import {
	PostHeaderContainer,
	ProfileDiv,
	PostHeaderIcon,
} from "../Styled/MainHome.styled";

export default function PostHeader({ userid, userPhoto, userName }) {
	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<Link to={`/profile/${userid}`}>
					<PostHeaderIcon>
						{userPhoto && <img src={userPhoto} alt='pp' />}
					</PostHeaderIcon>
				</Link>
				<Link to={`/profile/${userid}`}>
					<p>{userName}</p>
				</Link>
			</ProfileDiv>
			<div style={{ margin: "0 20px 0 0" }}>
				<i className='fas fa-ellipsis-h'></i>
			</div>
		</PostHeaderContainer>
	);
}
