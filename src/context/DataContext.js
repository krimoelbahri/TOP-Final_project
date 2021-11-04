import React, { useContext } from "react";
import {
	doc,
	getDoc,
	getDocs,
	setDoc,
	where,
	orderBy,
	limit,
	collection,
	query,
} from "firebase/firestore";
import { db } from "../firebase";

const DataContext = React.createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	async function getData(collectionName, document) {
		const data = await getDoc(doc(db, collectionName, document));
		return data;
	}

	async function setData(collectionName, document, data) {
		await setDoc(doc(db, collectionName, document), data);
	}
	function userData(name, userName, photoUrl, Bio, website) {
		return { name, userName, photoUrl, Bio, website };
	}

	const value = { getData, setData, userData };

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
