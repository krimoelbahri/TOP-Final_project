import React, { useEffect } from "react";
import Main from "../components/Main Home Components/Main";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";

export default function Home() {
	const { userPic, getData, setData, userData, setNavBarLoading } = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();

	useEffect(() => {
		if (!currentUser.displayName) {
			updateProfileNameAndImage("User", userPic.current);
		}
	}, [userPic, currentUser, updateProfileNameAndImage]);
	useEffect(() => {
		let id = currentUser.uid;
		getData("Users", id).then((result) => {
			if (!result.exists()) {
				setData("Users", id, { id });
			}
		});
	}, [currentUser, getData, setData]);

	useEffect(() => {
		let id = currentUser.uid;
		let name = currentUser.displayName;
		let pic = currentUser.photoURL;
		let email = currentUser.email;

		getData(id, "User").then((result) => {
			if (!result.exists()) {
				setData(id, "User", userData("", name, pic, email, "", "", "", [], []));
			}
		});
		setNavBarLoading(false);
	}, [currentUser, getData, setData, userData, setNavBarLoading]);

	return <Main />;
}
