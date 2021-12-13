import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useContext } from "react";

const StorageContext = React.createContext();

export function useStorage() {
	return useContext(StorageContext);
}

export function StorageProvider({ children }) {
	const storage = getStorage();

	function uploadImages(reference, file) {
		return uploadBytes(ref(storage, reference), file);
	}
	function DownloadImages(reference) {
		return getDownloadURL(ref(storage, reference));
	}
	const value = { uploadImages, DownloadImages };

	return <StorageContext.Provider value={value}>{children}</StorageContext.Provider>;
}
