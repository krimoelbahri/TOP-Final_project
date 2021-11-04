import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main Home Components/Main";
import { Container } from "../components/Styled/Home.styled";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";

export default function Home(props) {
	const { userName, name, url } = props;
	const { getData, setData, userData } = useData();
	const { currentUser, updateProfileNameAndImage } = useAuth();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!currentUser.displayName) {
			updateProfileNameAndImage(userName, url).then(() => {
				setLoading(false);
			});
		}
		setLoading(false);
	}, []);
	useEffect(() => {
		getData(currentUser.uid, "User").then((result) => {
			if (!result.exists()) {
				setData(
					currentUser.uid,
					"User",
					userData(
						"name",
						currentUser.displayName,
						currentUser.photoURL,
						"",
						""
					)
				);
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
