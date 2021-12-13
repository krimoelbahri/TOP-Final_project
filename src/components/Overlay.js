import React from "react";
import { Arrow, OverlayContainer, OverlayDiv } from "./Styled/Overlay.styled";

export default function Overlay(props) {
	const {
		arrowTop,
		arrowBottom,
		arrowLeft,
		arrowRight,
		show,
		transitionEnd,
		children,
		handleClick,
	} = props;
	return (
		<>
			<OverlayDiv onClick={handleClick} show={show} />
			<OverlayContainer onTransitionEnd={transitionEnd} show={show}>
				<Arrow
					top={arrowTop}
					bottom={arrowBottom}
					left={arrowLeft}
					right={arrowRight}
				></Arrow>
				{children}
			</OverlayContainer>
		</>
	);
}
