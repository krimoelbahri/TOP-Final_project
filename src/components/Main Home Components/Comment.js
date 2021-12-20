import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { CommentContainer } from "../Styled/MainHome.styled";
import { Link } from "react-router-dom";

export default function Comment({ data }) {
	//onst [loading, setLoading] = useState(true);
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
		//setLoading(false);
	}, []);
	return (
		<CommentContainer>
			<>
				<span>
					{/* TODO: transform this to a link */}
					<Link
						style={{ color: "black", fontWeight: "bold" }}
						to={`/profile/${data.userId}`}
					>
						<p>{userInfo.Username} </p>
					</Link>
				</span>
				&nbsp;
				<span> {data.comment}</span>
			</>
		</CommentContainer>
	);
}
