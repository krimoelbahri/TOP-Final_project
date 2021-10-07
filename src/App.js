import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import "./styles/reset.css";
import "./styles/App.css";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Home />
		</Fragment>
	);
}

export default App;
