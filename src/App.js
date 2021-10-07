import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import "./styles/reset.css";
import "./styles/App.css";

function App() {
	return (
		<HashRouter className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
			</Switch>
		</HashRouter>
	);
}

export default App;
