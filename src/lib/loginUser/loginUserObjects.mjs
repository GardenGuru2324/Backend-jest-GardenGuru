import { errorMessages } from "../../errors/errors.mjs";
import { succesMessages } from "../../messages/messages.mjs";

export const objectLoginSuccesUser = [
	{
		it: "login an user with email jest_user_1@example.com",
		user: {
			email: "jest_user_1@example.com",
			password: "admin123"
		},
		expect: {
			_id: "666730eb1cca1f0d6338ec65",
			userId: "jest_user_1",
			userName: "jest_user_1",
			password: "$2a$12$N.7.wzAYOuSFIJdTetqNhOFJpRRyfUnCS/qzAUK2nhDjne2uF7YtS",
			ratingPlaced: true,
			profilePicture: "https://example.com/profile/johndoe.jpg",
			email: "jest_user_1@example.com",
			fullName: "jest_user_1",
			accountCreated: 1602960000
		}
	}
];

export const objectMessages = [
	{
		it: "not login an user when user does not exist",
		user: {
			email: "jest_user_nonExistingUser@example.com",
			password: "admin123"
		},
		expect: errorMessages.userNotFound
	}
];

export const objectStatusCode = [
	{
		it: "",
		userId: "",
		plantId: "",
		expect: 200
	}
];
