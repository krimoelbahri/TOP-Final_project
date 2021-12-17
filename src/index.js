import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./styles/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter className='App'>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);
