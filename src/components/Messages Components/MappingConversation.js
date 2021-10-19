import React from "react";
import {
	MappingConversationContainer,
	MessageContainer,
	MessageWrapper,
} from "../Styled/Inbox.styled";
export default function MappingConversation() {
	return (
		<MappingConversationContainer>
			<div>
				{/*TODO: Map through messages */}
				<MessageContainer>
					<MessageWrapper>
						<span>Hi</span>
					</MessageWrapper>
				</MessageContainer>
				<MessageContainer>
					<MessageWrapper>
						<span>My name is Elbahri</span>
					</MessageWrapper>
				</MessageContainer>
			</div>
		</MappingConversationContainer>
	);
}
