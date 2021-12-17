import { createSlice } from "@reduxjs/toolkit";

export const followersSlice = createSlice({
	name: "followers",
	initialState: {
		following: [],
	},
	reducers: {
		follow: (state, action) => {
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
