import { createSlice } from "@reduxjs/toolkit";

export const followersSlice = createSlice({
	name: "followers",
	initialState: {
		following: [],
	},
	reducers: {
		follow: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.following = action.payload;
		},
		unfollow: (state, action) => {
			state.following = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { follow, unfollow } = followersSlice.actions;

export default followersSlice.reducer;
