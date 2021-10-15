import React from "react";
import { InboxHeader } from "../Styled/Inbox.styled";
import { ProfileDiv, PostHeaderIcon } from "../Styled/MainHome.styled";
import Conversation from "./Conversation";

export default function InboxConversation() {
	return (
		<>
			<InboxHeader>
				<ProfileDiv>
					<PostHeaderIcon>
						<i className='fas fa-user-circle'></i>
					</PostHeaderIcon>
					<p>Profil Name</p>
				</ProfileDiv>
			</InboxHeader>
			{<Conversation />}
		</>
	);
}
