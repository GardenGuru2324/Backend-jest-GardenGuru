import { errorMessages } from "../../errors/errors.mjs";

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
		it: "not login an user when email is wrong and returns correct message",
		user: {
			email: "jest_user_nonExistingUser@example.com",
			password: "admin123"
		},
		expect: errorMessages.userNotFound
	},
	{
		it: "not login an user when passwrod is wrong and returns correct message",
		user: {
			email: "jest_user_1@example.com",
			password: "rongPassword"
		},
		expect: errorMessages.wrongPassword
	},
	{
		it: "not login an user when email is missing and returns correct message",
		user: {
			password: "rongPassword"
		},
		expect: errorMessages.emailRequired
	},
	{
		it: "not login an user when password is missing and returns correct message",
		user: {
			email: "jest_user_1@example.com"
		},
		expect: errorMessages.passwordRequired
	}
];

export const objectStatusCode = [
	{
		it: "not login an user when passwrod is wrong and returns correct statusCode",
		user: {
			email: "jest_user_1@example.com",
			password: "admin123"
		},
		expect: 200
	},
	{
		it: "not login an user when email is wrong and returns correct statusCode",
		user: {
			email: "jest_user_nonExistingUser@example.com",
			password: "admin123"
		},
		expect: 404
	},
	{
		it: "not login an user when passwrod is wrong and returns correct statusCode",
		user: {
			email: "jest_user_1@example.com",
			password: "rongPassword"
		},
		expect: 401
	},
	{
		it: "not login an user when email is missing and returns correct statusCode",
		user: {
			password: "rongPassword"
		},
		expect: 409
	},
	{
		it: "not login an user when password is missing and returns correct statusCode",
		user: {
			email: "jest_user_1@example.com"
		},
		expect: 409
	}
];
