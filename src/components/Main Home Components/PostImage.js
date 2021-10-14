import React from "react";
import styled from "styled-components";
import sample from "../../assets/sample-img.jpg";
const Container = styled.div`
	width: 100%;
	min-height: 300px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export default function PostImage() {
	return (
		<Container>
			<Image src={sample} alt='sample-img'></Image>
		</Container>
	);
}
