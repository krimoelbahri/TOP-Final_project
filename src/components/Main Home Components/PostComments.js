import React from "react";
import { ViewCommentsLink, AgeLink } from "../Styled/MainHome.styled";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { age } from "../../Functions/timeHelpers";
export default function PostComments({ post, comments, handleSubmitComment }) {
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
				<span>{age(post.date)} AGO</span>
			</AgeLink>
			<AddComment handleSubmitComment={handleSubmitComment} />
		</div>
	);
}
