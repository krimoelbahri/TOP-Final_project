import { createSlice } from "@reduxjs/toolkit";

export const followersSlice = createSlice({
	name: "followers",
	initialState: {
		following: [],
		followers: [],
	},
	reducers: {
		updateFollowing: (state, action) => {
			state.following = action.payload;
		},
		updateFollowers: (state, action) => {
			state.followers = action.payload;
		},
	},
});

export const { updateFollowing, updateFollowers } = followersSlice.actions;
export default followersSlice.reducer;
