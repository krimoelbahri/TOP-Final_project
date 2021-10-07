import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const app = initializeApp({
	apiKey: "AIzaSyDNTEbBgvmMvfHyUoaS-NF9yM1LAVlfLlA",
	authDomain: "fakegram-e65b8.firebaseapp.com",
	projectId: "fakegram-e65b8",
	storageBucket: "fakegram-e65b8.appspot.com",
	messagingSenderId: "928324743906",
	appId: "1:928324743906:web:254f7193a48d17bc65e4bb",
	measurementId: "G-VCE6J5Z21L",
});
const db = getFirestore();
const auth = getAuth();
export { app, db, auth };
