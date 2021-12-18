export const handleFollowing = async function (id, userId, getData, setData) {
	//handling Following the user
	let userResult = await getData(userId, "User");
	let following = userResult.data().Following;
	if (!following.includes(id)) {
		following.push(id);
	}
	await setData(userId, "User", {
		...userResult.data(),
		Following: following,
	});
	//handling adding Followers to the user
	let result = await getData(id, "User");
	let userFollowers = result.data().Followers;
	if (!userFollowers.includes(userId)) {
		userFollowers.push(userId);
	}
	await setData(id, "User", {
		...result.data(),
		Followers: userFollowers,
	});
	return { following, userFollowers };
};
export const handleUnFollowing = async function (id, userId, getData, setData) {
	//handling unfollowing the user
	let userResult = await getData(userId, "User");
	let following = userResult.data().Following;
	if (following.includes(id)) {
		const index = following.indexOf(id);
		if (index > -1) {
			following.splice(index, 1);
		}
	}
	await setData(userId, "User", {
		...userResult.data(),
		Following: following,
	});
	//handling removing Followers to the user
	let result = await getData(id, "User");
	let userFollowers = result.data().Followers;
	if (userFollowers.includes(userId)) {
		const index = userFollowers.indexOf(userId);
		if (index > -1) {
			userFollowers.splice(index, 1);
		}
	}
	await setData(id, "User", {
		...result.data(),
		Followers: userFollowers,
	});
	return { following, userFollowers };
};
