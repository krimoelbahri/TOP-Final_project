import React from "react";
import { ViewCommentsLink, AgeLink } from "../Styled/MainHome.styled";
import AddComment from "./AddComment";
import Comment from "./Comment";
import moment from "moment";

export default function PostComments({ post, comments, handleSubmitComment }) {
	function postAge(date) {
		let diff = Math.abs(new Date() - date.toDate());
		let age = moment.duration(diff);

		if (age.asDays() >= 1) {
			return `${age.asDays().toFixed()} Day`;
		}
		if (age.asHours() >= 1) {
			return `${age.asHours().toFixed()} Hour`;
		}
		if (age.asMinutes() >= 1) {
			return `${age.asMinutes().toFixed()} Minute`;
		}
		if (age.asSeconds() >= 1) {
			return `${age.asSeconds().toFixed()} Second`;
		}
	}
	return (
		<div>
			{comments.map((data, index) => {
				return <Comment key={`comment${index}`} data={data} />;
			})}

			{comments.length > 3 && (
				<ViewCommentsLink>
					<span>View all {comments.length} comments</span>
				</ViewCommentsLink>
			)}
			<AgeLink>
				<span>{postAge(post.date)} AGO</span>
			</AgeLink>
			<AddComment handleSubmitComment={handleSubmitComment} />
		</div>
	);
}
