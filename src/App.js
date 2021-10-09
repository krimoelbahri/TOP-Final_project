import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { AuthPrivateRoute, HomePrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Home from "./routes/Home";
import "./styles/reset.css";
import "./styles/App.css";

function App() {
	return (
		<HashRouter className='App'>
			<AuthProvider>
				<Switch>
					<HomePrivateRoute exact path='/' component={Home} />
					<AuthPrivateRoute exact path='/login' component={Login} />
					<AuthPrivateRoute exact path='/signup' component={SignUp} />
				</Switch>
			</AuthProvider>
		</HashRouter>
	);
}

export default App;
