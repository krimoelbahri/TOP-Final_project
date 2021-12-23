import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RemovePost } from "../DropDown";
import Overlay from "../Overlay";
import { PostHeaderContainer, ProfileDiv, PostHeaderIcon } from "../Styled/MainHome.styled";
import { useData } from "../../context/DataContext";
import Loader from "react-loader-spinner";

export default function PostHeader({ userid, userPhoto, userName, post }) {
	const [showRemovePost, setShowRemovePost] = useState(false);
	const [loading, setLoading] = useState(false);
	const { getData, setData } = useData();

	const navigate = useNavigate();
	async function handleRemovePost() {
		try {
			setLoading(true);
			let result = await getData(userid, "Posts");
			let arr = result.data().posts;
			arr.splice(post.postId, 1);
			arr.forEach((post, index) => {
				post.postId = index;
			});
			console.log(arr);
			await setData(userid, "Posts", { posts: arr });
			navigate(`/profile/${userid}`);
		} catch (error) {
			navigate("/error");
		}
	}

	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<Link to={`/profile/${userid}`}>
					<PostHeaderIcon>{userPhoto && <img src={userPhoto} alt='pp' />}</PostHeaderIcon>
				</Link>
				<Link to={`/profile/${userid}`}>
					<p>{userName}</p>
				</Link>
			</ProfileDiv>
			<div
				onClick={() => setShowRemovePost(!showRemovePost)}
				style={{ margin: "0 20px 0 0" }}
			>
				{!loading ? (
					<i className='fas fa-ellipsis-h'></i>
				) : (
					<Loader type='Oval' color='black' height={20} width={50} />
				)}

				<div style={{ marginLeft: "-65px", top: "15px" }}>
					<Overlay
						arrowLeft='65px'
						arrowTop='-6px'
						show={showRemovePost}
						handleClick={() => setShowRemovePost(!showRemovePost)}
					>
						{showRemovePost && (
							<RemovePost
								handleShowRemovePost={() => setShowRemovePost(!showRemovePost)}
								handleRemovePost={handleRemovePost}
								userid={userid}
							/>
						)}
					</Overlay>
				</div>
			</div>
		</PostHeaderContainer>
	);
}
