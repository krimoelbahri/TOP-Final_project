import React from "react";
import {
	InboxDefaultContainer,
	InboxDefaultIcon,
} from "../Styled/Inbox.styled";

function InboxDefault() {
	return (
		<InboxDefaultContainer>
			<InboxDefaultIcon>
				<i className='bi bi-telegram'></i>
				<p>Your Messages</p>
			</InboxDefaultIcon>
		</InboxDefaultContainer>
	);
}

export default InboxDefault;
