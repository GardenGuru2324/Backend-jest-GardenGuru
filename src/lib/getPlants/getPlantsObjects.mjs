import { errorMessages } from "../../errors/errors.mjs";

export const objectStatusCodes = [
	{
		it: "get plants of user and return correct status code",
		userId: "jest_user_1",
		expect: 200
	},
	{
		it: "not get any plant of user who does not exist and return correct status code",
		userId: "jest_user_0",
		expect: 404
	},
	{
		it: "not get any plant of user with no plants and return correct status code",
		userId: "jest_user_3",
		expect: 409
	}
];

export const objectMessages = [
	{
		it: "not get any plant of user with no plants and return correct error message",
		userId: "jest_user_3",
		expect: errorMessages.userHasNoPlants
	},
	{
		it: "not get any plant of user who does not exist and return correct error message",
		userId: "jest_user_0",
		expect: errorMessages.userNotFound
	}
];
