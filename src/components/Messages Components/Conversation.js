import React from "react";

import {
	ConversationContainer,
	SendMessageForm,
	TextArea,
	EmojiDiv,
	MainConversationContainer,
} from "../Styled/Inbox.styled";
import SubmitButton from "../Form Components/SubmitButton";
import MappingConversation from "./MappingConversation";

export default function Conversation() {
	return (
		<ConversationContainer>
			<MainConversationContainer>
				<MappingConversation />
			</MainConversationContainer>
			<SendMessageForm>
				<EmojiDiv>
					<div>
						<i className='bi bi-emoji-smile'></i>
					</div>
				</EmojiDiv>
				<TextArea placeholder='Your Message... ' />
				<i className='bi bi-image'></i>
				<SubmitButton
					type='submit'
					fontColor='#0095f6'
					fontOpacity='.3'
					disabled='disabled'>
					<h4>Send</h4>
				</SubmitButton>
			</SendMessageForm>
		</ConversationContainer>
	);
}
