import React from "react";
import { IconsContainer, IconsWraper } from "../Styled/MainHome.styled";

export default function PostIcons({ handleLikes, fillHeart }) {
	return (
		<IconsContainer>
			<IconsWraper>
				<div>
					{fillHeart ? (
						<i
							onClick={handleLikes}
							className='fas fa-heart'
							style={{ color: "red", opacity: " 0.8" }}
						></i>
					) : (
						<i onClick={handleLikes} className='far fa-heart'></i>
					)}
				</div>
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
