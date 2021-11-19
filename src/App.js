import React from "react";
import GlobalStyling from "./components/Styled/General.styling";
import { HashRouter, Switch } from "react-router-dom";
import { AuthPrivateRoute, HomePrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { PostsProvider } from "./context/PostContaxt";
import { StorageProvider } from "./context/StorageContext";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Messages from "./routes/Messages";
import Profile from "./routes/Profile";
import EditProfile from "./routes/EditProfile";
import PostModal from "./components/PostModal";
import "./styles/reset.css";

function App() {
	return (
		<HashRouter className='App'>
			<>
				<AuthProvider>
					<DataProvider>
						<PostsProvider>
							<StorageProvider>
								<Switch>
									<HomePrivateRoute exact path='/' component={Home} />
									<HomePrivateRoute exact path='/inbox' component={Messages} />
									<HomePrivateRoute exact path='/profile' component={Profile} />
									<HomePrivateRoute
										exact
										path='/profile/edit'
										component={EditProfile}
									/>
									<AuthPrivateRoute exact path='/login' component={Login} />
									<AuthPrivateRoute exact path='/signup' component={SignUp} />
								</Switch>
								<PostModal />
							</StorageProvider>
						</PostsProvider>
					</DataProvider>
				</AuthProvider>
				<GlobalStyling />
			</>
		</HashRouter>
	);
}

export default App;
