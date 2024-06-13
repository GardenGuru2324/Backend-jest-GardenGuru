import { errorMessages } from "../../errors/errors.mjs";

const randomNumber = Math.floor(Math.random() * 1000);

export const objectRegsiterSuccesUser = [
	{
		it: "register an new user",
		newUser: {
			email: `testUser${randomNumber}@gmail.com`,
			fullName: "test",
			password: "test"
		},
		expect: {
			email: `testUser${randomNumber}@gmail.com`,
			fullName: "test",
			statusCode: 201
		}
	}
];

export const objectMessages = [
	{
		it: "not register an new user when email is already in use and returns correct message",
		newUser: {
			email: `jest_user_1@example.com`,
			fullName: "jest_user_1",
			password: "test"
		},
		expect: errorMessages.userAlreadyExist
	},
	{
		it: "not register an new user when email is not valid and returns correct message",
		newUser: {
			email: `jestUser@.com`,
			fullName: "jest_user_1",
			password: "test"
		},
		expect: errorMessages.emailNotValid
	}
];

export const objectStatusCode = [
	{
		it: "not register an new user when email is already in use and returns correct statusCode",
		newUser: {
			email: `jest_user_1@example.com`,
			fullName: "jest_user_1",
			password: "test"
		},
		expect: 409
	},
	{
		it: "not register an new user when email is not valid and returns correct statusCode",
		newUser: {
			email: `jestUser@.com`,
			fullName: "jest_user_1",
			password: "test"
		},
		expect: 422
	}
];
