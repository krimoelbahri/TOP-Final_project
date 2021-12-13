import React from "react";
import { IconsContainer, IconsWraper } from "../Styled/MainHome.styled";

export default function PostIcons({ handleLikes, fillHeart, disabled }) {
	return (
		<IconsContainer>
			<IconsWraper>
				<button disabled={disabled} onClick={handleLikes}>
					{fillHeart ? (
						<i
							className='fas fa-heart'
							style={{ color: "red", opacity: " 0.8" }}
						></i>
					) : (
						<i className='far fa-heart'></i>
					)}
				</button>
				<div>
					<i className='bi bi-chat-right'></i>
				</div>
			</IconsWraper>
			<IconsWraper>
				<div>
					<i className='bi bi-bookmark'></i>{" "}
				</div>
			</IconsWraper>
		</IconsContainer>
	);
}
