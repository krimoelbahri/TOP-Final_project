import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { CommentContainer } from "../Styled/MainHome.styled";
import { Link, useNavigate } from "react-router-dom";

export default function Comment({ data }) {
	const [loading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState({ photoUrl: "", Username: "" });
	const { getData } = useData();
	const navigate = useNavigate();
	useEffect(() => {
		async function fetching() {
			let result = await getData(data.userId, "User");
			setUserInfo(result.data());
		}
		try {
			fetching();
			setLoading(false);
		} catch (error) {
			console.log(error);
			navigate("/error");
		}
	}, [data]);
	return (
		<CommentContainer>
			<>
				{!loading && (
					<>
						<span>
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
				)}
			</>
		</CommentContainer>
	);
}
