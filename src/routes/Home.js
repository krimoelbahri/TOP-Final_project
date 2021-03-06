import React, { useEffect } from "react";
import Main from "../components/Main Home Components/Main";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";

export default function Home() {
	const { userPic, getData, setData, userData, setNavBarLoading } = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();

	useEffect(() => {
		let id = currentUser.uid;
		getData("Users", id).then((result) => {
			if (!result.exists()) {
				setData("Users", id, { id });
			}
		});
	}, [currentUser, getData, setData]);

	useEffect(() => {
		async function fetching() {
			if (!currentUser.displayName) {
				await updateProfileNameAndImage("User", userPic.current);
			}
			let id = currentUser.uid;
			let name = currentUser.displayName;
			let pic = currentUser.photoURL;
			let email = currentUser.email;
			let result = await getData(id, "User");
			if (!result.exists()) {
				setData(id, "User", userData("", name, pic, email, "", "", "", [], []));
			}
			let postResult = await getData(id, "Posts");
			if (!postResult.exists()) {
				setData(id, "Posts", { posts: [] });
			}
			setNavBarLoading(false);
		}
		fetching();
	}, [
		currentUser,
		getData,
		setData,
		updateProfileNameAndImage,
		userData,
		userPic,
		setNavBarLoading,
	]);

	return <Main />;
}
