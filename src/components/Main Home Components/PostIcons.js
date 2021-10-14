import React from "react";
import { IconsContainer, IconsWraper } from "../Styled/MainHome.styled";

export default function PostIcons() {
	return (
		<IconsContainer>
			<IconsWraper>
				<div>
					<i className='far fa-heart'></i>
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
