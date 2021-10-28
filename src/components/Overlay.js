import React from "react";
import { Arrow, OverlayContainer } from "./Styled/Overlay.styled";

export default function Overlay(props) {
	const { arrowTop, arrowBottom, arrowLeft, arrowRight, show, children } =
		props;
	return (
		<OverlayContainer show={show}>
			<Arrow
				top={arrowTop}
				bottom={arrowBottom}
				left={arrowLeft}
				right={arrowRight}></Arrow>
			{children}
		</OverlayContainer>
	);
}
