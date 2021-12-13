import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter className='App'>
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);
