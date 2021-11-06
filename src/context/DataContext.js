import React, { useContext, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import userPic from "../assets/user.png";

const DataContext = React.createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const [currentUserData, setCurrentUserData] = useState({});

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

	const value = {
		getData,
		setData,
		userData,
		currentUserData,
		setCurrentUserData,
		userPic,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
