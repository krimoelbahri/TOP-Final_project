import React from "react";
import GlobalStyling from "./components/Styled/General.styling";
import { HashRouter, Switch } from "react-router-dom";
import { AuthPrivateRoute, HomePrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Messages from "./routes/Messages";

import "./styles/reset.css";
import Profile from "./routes/Profile";

function App() {
	return (
		<HashRouter className='App'>
			<>
				<AuthProvider>
					<Switch>
						<HomePrivateRoute exact path='/' component={Home} />
						<HomePrivateRoute exact path='/inbox' component={Messages} />
						<HomePrivateRoute exact path='/profile' component={Profile} />
						<AuthPrivateRoute exact path='/login' component={Login} />
						<AuthPrivateRoute exact path='/signup' component={SignUp} />
					</Switch>
				</AuthProvider>
				<GlobalStyling />
			</>
		</HashRouter>
	);
}

export default App;
