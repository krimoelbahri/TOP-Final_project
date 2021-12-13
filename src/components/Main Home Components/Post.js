import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { usePosts } from "../../context/PostContaxt";
import { PostContainer } from "../Styled/MainHome.styled";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";
import PostImage from "./PostImage";
import PostStats from "./PostStats";

export default function Post({ data }) {
	const [loading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState({ photoUrl: "", Username: "" });
	const [likes, setLikes] = useState([]);
	const [comments, setComments] = useState([]);
	const [fillHeart, setfillHeart] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const { getData, setData } = useData();
	const { currentUser } = useAuth();
	const { userComment } = usePosts();

	async function handleLikes() {
		setDisabled(true);
		setfillHeart(!fillHeart);
		let result = await getData(data.userId, "Posts");
		let editedPost = result.data().posts[data.postId];
		if (editedPost.likes.includes(currentUser.uid)) {
			const index = editedPost.likes.indexOf(currentUser.uid);
			if (index > -1) {
				editedPost.likes.splice(index, 1);
			}
		} else {
			editedPost.likes.push(currentUser.uid);
		}
		setLikes(editedPost.likes);
		const newArray = Object.assign([], result.data().posts, {
			[data.postId]: editedPost,
		});
		let posts = { posts: newArray };
		await setData(data.userId, "Posts", posts);
		setDisabled(false);
	}
	async function handleSubmitComment(comment) {
		let result = await getData(data.userId, "Posts");
		let editedPost = result.data().posts[data.postId];
		let commentObj = userComment(
			editedPost.comments.length,
			currentUser.uid,
			comment,
		);
		editedPost.comments.push(commentObj);
		setComments(editedPost.comments);
		const newArray = Object.assign([], result.data().posts, {
			[data.postId]: editedPost,
		});
		let posts = { posts: newArray };
		await setData(data.userId, "Posts", posts);
	}
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
	useEffect(() => {
		getData(data.userId, "Posts")
			.then((result) => {
				setLikes(result.data().posts[data.postId].likes);
				setComments(result.data().posts[data.postId].comments);
				if (result.data().posts[data.postId].likes.includes(currentUser.uid)) {
					setfillHeart(true);
				}
			})
			.catch((error) => {
				console.log(error);
			});
		setLoading(false);
	}, [data, getData, currentUser]);
	return (
		<>
			{!loading && (
				<PostContainer>
					<PostHeader
						userPhoto={userInfo.photoUrl}
						userName={userInfo.Username}
					/>
					<PostImage postImgUrl={data.photoUrl} />
					<PostIcons
						handleLikes={handleLikes}
						fillHeart={fillHeart}
						disabled={disabled}
					/>
					<PostStats likes={likes} />
					<PostComments
						comments={comments}
						post={data}
						handleSubmitComment={handleSubmitComment}
					/>
				</PostContainer>
			)}
		</>
	);
}
