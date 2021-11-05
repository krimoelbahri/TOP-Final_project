import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main Home Components/Main";
import { Container } from "../components/Styled/Home.styled";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";

export default function Home() {
	const { getData, setData, userData } = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		console.log("i am at the top");
		if (!currentUser.displayName) {
			updateProfileNameAndImage("User", "/").then(() => {
				setLoading(false);
			});
		}
		setLoading(false);
		console.log("i am getting out of effect1");
	}, []);
	useEffect(() => {
		console.log("i am at the top of effect 2");

		getData(currentUser.uid, "User").then((result) => {
			if (!result.exists()) {
				setData(
					currentUser.uid,
					"User",
					userData(
						"",
						currentUser.displayName,
						currentUser.photoURL,
						currentUser.email,
						"",
						"",
						""
					)
				).then(() => console.log("i am getting out of effect2"));
			}
		});
	}, []);
	return (
		<Container>
			<NavBar loading={loading} />
			<Main loading={loading} />
		</Container>
	);
}
