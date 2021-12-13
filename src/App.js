import React from "react";
import GlobalStyling from "./components/Styled/General.styling";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { PostsProvider } from "./context/PostContaxt";
import { StorageProvider } from "./context/StorageContext";
import PostModal from "./components/PostModal";
import "./styles/reset.css";
import MyRoutes from "./routes/MyRoutes";

function App() {
	return (
		<>
			<AuthProvider>
				<StorageProvider>
					<DataProvider>
						<PostsProvider>
							<MyRoutes />
							<PostModal />
						</PostsProvider>
					</DataProvider>
				</StorageProvider>
			</AuthProvider>
			<GlobalStyling />
		</>
	);
}

export default App;
