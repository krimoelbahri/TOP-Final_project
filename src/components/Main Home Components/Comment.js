import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { CommentContainer } from "../Styled/MainHome.styled";

export default function Comment({ data }) {
	const [loading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState({ photoUrl: "", Username: "" });

	const { getData } = useData();

	useEffect(() => {
		getData(data.userId, "User")
			.then((result) => {
				setUserInfo(result.data());
			})
			.catch((error) => {
				console.log(error);
			});
		setLoading(false);
	}, [data]);
	return (
		<CommentContainer>
			{!loading && (
				<>
					<span>
						{/* TODO: transform this to a link */}
						<p>{userInfo.Username} </p>
					</span>
					&nbsp;
					<span> {data.comment}</span>
				</>
			)}
		</CommentContainer>
	);
}
