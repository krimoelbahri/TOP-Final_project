import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./styles/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter className='App'>
			<Provider store={store}>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);
