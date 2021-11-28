import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	signInWithPopup,
	updateProfile,
	updateEmail,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();
export function useAuth() {
	return useContext(AuthContext);
}
export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const provider = new FacebookAuthProvider();

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	function logout() {
		return signOut(auth);
	}
	function loginWithFacebook() {
		return signInWithPopup(auth, provider);
	}
	function updateProfileNameAndImage(name, Url) {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: Url,
		});
	}
	function updateProfileEmail(email) {
		return updateEmail(auth.currentUser, email);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		loginWithFacebook,
		updateProfileNameAndImage,
		updateProfileEmail,
		signup,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
