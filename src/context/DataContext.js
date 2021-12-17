import React, { useContext, useState, useEffect, useRef } from "react";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useStorage } from "./StorageContext";

const DataContext = React.createContext();
export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const [editedData, setEditedData] = useState({});
	const [currentUserData, setCurrentUserData] = useState({});
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [navBarLoading, setNavBarLoading] = useState(true);

	const { DownloadImages } = useStorage();
	const userPic = useRef();
	async function getData(collectionName, document) {
		const data = await getDoc(doc(db, collectionName, document));
		return data;
	}
	async function getDocuments(collectionName) {
		const data = await getDocs(collection(db, collectionName));
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
		Website,
		Following,
		Followers,
	) {
		return {
			Bio,
			Email,
			Name,
			PhoneNumber,
			Username,
			Website,
			photoUrl,
			Following,
			Followers,
		};
	}

	function toggleBodyOverflow() {
		let bodyStyle = document.getElementsByTagName("body")[0].style.overflow;
		if (!bodyStyle) {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "";
		}
	}
	useEffect(() => {
		async function getUserPic() {
			userPic.current = await DownloadImages(`profilepic/user/user.png`);
		}
		getUserPic();
	}, [DownloadImages]);

	const value = {
		getData,
		getDocuments,
		setData,
		userData,
		currentUserData,
		setCurrentUserData,
		isModalVisible,
		setIsModalVisible,
		userPic,
		toggleBodyOverflow,
		editedData,
		setEditedData,
		navBarLoading,
		setNavBarLoading,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
