import React, { useContext, useState } from "react";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import userPic from "../assets/user.png";

const DataContext = React.createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
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
	function userPost(title, photoUrl, likes, comments) {
		let date = Timestamp.fromDate(new Date());
		return { title, photoUrl, likes, comments, date };
	}
	function toggleBodyOverflosw() {
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
		userPost,
		currentUserData,
		setCurrentUserData,
		isModalVisible,
		setIsModalVisible,
		userPic,
		toggleBodyOverflosw,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
