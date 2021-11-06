import React from "react";
import ContentLoader from "react-content-loader";

export const ProfileShow = (props) => (
	<ContentLoader
		speed={2}
		width={300}
		height={170}
		viewBox='0 0 400 170'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<circle cx='248' cy='59' r='49' />
		<circle cx='263' cy='66' r='8' />
		<rect x='175' y='120' rx='0' ry='0' width='156' height='8' />
		<rect x='204' y='137' rx='0' ry='0' width='100' height='8' />
		<rect x='248' y='128' rx='0' ry='0' width='0' height='1' />
		<rect x='247' y='126' rx='0' ry='0' width='1' height='8' />
		<rect x='252' y='166' rx='0' ry='0' width='1' height='0' />
	</ContentLoader>
);
export const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={400}
		height={160}
		viewBox='0 0 400 160'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
		<rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
		<rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
		<circle cx='20' cy='20' r='20' />
	</ContentLoader>
);
