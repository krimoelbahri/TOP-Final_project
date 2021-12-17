import React, { useState } from "react";
import { InboxContainer } from "../Styled/Inbox.styled";
import InboxConversation from "./InboxConversation";
import InboxDefault from "./InboxDefault";

export default function Inbox() {
	const [defaultInbox, setDefaultInbox] = useState(true);
	return (
		<InboxContainer>
			{defaultInbox && <InboxDefault />}
			{!defaultInbox && <InboxConversation />}
		</InboxContainer>
	);
}
