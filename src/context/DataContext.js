import React, { useContext, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import userPic from "../assets/user.png";
import { useAuth } from "./AuthContext";
const DataContext = React.createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const { currentUser } = useAuth();
	const [profileLoading, setProfileLoading] = useState(true);

	const [currentUserData, setCurrentUserData] = useState({});
	const [isModalVisible, setIsModalVisible] = useState(false);

	async function getData(collectionName, document) {
		const data = await getDoc(doc(db, collectionName, document));
		return data;
	}

	async function setData(collectionName, document, data) {
		await setDoc(doc(db, collectionName, document), data);
	}
	function userData(
		Name,
		Username,
		photoUrl,
		Email,
		Bio,
		PhoneNumber,
		Website
	) {
		return { Bio, Email, Name, PhoneNumber, Username, Website, photoUrl };
	}

	function toggleBodyOverflow() {
		let bodyStyle = document.getElementsByTagName("body")[0].style.overflow;
		if (!bodyStyle) {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "";
		}
	}
	const value = {
		getData,
		setData,
		userData,
		currentUserData,
		setCurrentUserData,
		isModalVisible,
		setIsModalVisible,
		userPic,
		toggleBodyOverflow,
		profileLoading,
	};
	useEffect(() => {
		console.log("fetching userData");
		if (currentUser) {
			getData(currentUser.uid, "User")
				.then((result) => {
					setCurrentUserData(result.data());
					setProfileLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setProfileLoading(false);
				});
		}
	}, [currentUser]);
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
