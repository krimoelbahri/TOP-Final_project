import React from "react";
import { PostsContainer } from "../Styled/Profile.styled";
import sample from "../../assets/sample-img.jpg";

export default function Posts() {
	return (
		<PostsContainer>
			<div>
				<img src={sample} alt='sample-img'></img>
			</div>
			<div>
				<img src={sample} alt='sample-img'></img>
			</div>
			<div>
				<img src={sample} alt='sample-img'></img>
			</div>
			<div>
				<img src={sample} alt='sample-img'></img>
			</div>
			<div>
				<img src={sample} alt='sample-img'></img>
			</div>
		</PostsContainer>
	);
}
