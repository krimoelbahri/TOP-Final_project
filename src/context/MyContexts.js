import React from "react";
import { AuthProvider } from "./AuthContext";
import { DataProvider } from "./DataContext";
import { PostsProvider } from "./PostContaxt";
import { StorageProvider } from "./StorageContext";
export default function MyContexts({ children }) {
	return (
		<AuthProvider>
			<StorageProvider>
				<DataProvider>
					<PostsProvider>{children}</PostsProvider>
				</DataProvider>
			</StorageProvider>
		</AuthProvider>
	);
}
