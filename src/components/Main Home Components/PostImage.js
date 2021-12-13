import React from "react";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	min-height: 300px;
	max-height: 600px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export default function PostImage({ postImgUrl }) {
	return (
		<Container>
			<Image src={postImgUrl} alt='sample-img'></Image>
		</Container>
	);
}
