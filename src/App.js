import React from "react";
import GlobalStyling from "./components/Styled/General.styling";
import PostModal from "./components/PostModal";
import "./styles/reset.css";
import MyRoutes from "./routes/MyRoutes";
import MyContexts from "./context/MyContexts";

function App() {
	return (
		<>
			<MyContexts>
				<MyRoutes />
				<PostModal />
			</MyContexts>
			<GlobalStyling />
		</>
	);
}

export default App;
