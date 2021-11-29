import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import { PostContainer } from "../Styled/MainHome.styled";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";
import PostImage from "./PostImage";
import PostStats from "./PostStats";

export default function Post({ data }) {
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
	}, [data, getData]);
	return (
		<>
			{!loading && (
				<PostContainer>
					<PostHeader
						userPhoto={userInfo.photoUrl}
						userName={userInfo.Username}
					/>
					<PostImage postImgUrl={data.photoUrl} />
					<PostIcons />
					<PostStats />
					<PostComments />
				</PostContainer>
			)}
		</>
	);
}
