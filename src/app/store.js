import { configureStore } from "@reduxjs/toolkit";
import followersReducer from "../states/followers";

export default configureStore({
	reducer: {
		followers: followersReducer,
	},
});
