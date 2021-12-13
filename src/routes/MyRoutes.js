import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Messages from "./Messages";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MyRoutes() {
	const { currentUser } = useAuth();

	return (
		<Routes>
			<Route
				path='/'
				element={currentUser ? <Home /> : <Navigate to={"/login"} />}
			/>
			<Route
				path='/inbox'
				element={currentUser ? <Messages /> : <Navigate to={"/login"} />}
			/>
			<Route
				path='/profile'
				element={currentUser ? <Profile /> : <Navigate to={"/login"} />}
			/>
			<Route
				path='/profile/edit'
				element={currentUser ? <EditProfile /> : <Navigate to={"/login"} />}
			/>
			<Route
				path='/login'
				element={!currentUser ? <Login /> : <Navigate to={"/"} />}
			/>
			<Route
				path='/signup'
				element={!currentUser ? <SignUp /> : <Navigate to={"/"} />}
			/>
		</Routes>
	);
}
