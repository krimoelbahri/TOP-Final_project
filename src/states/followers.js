import { createSlice } from "@reduxjs/toolkit";

export const followersSlice = createSlice({
	name: "followers",
	initialState: {
		following: [],
	},
	reducers: {
		updateFollowing: (state, action) => {
			state.following = action.payload;
		},
	},
});

export const { updateFollowing } = followersSlice.actions;
export default followersSlice.reducer;
