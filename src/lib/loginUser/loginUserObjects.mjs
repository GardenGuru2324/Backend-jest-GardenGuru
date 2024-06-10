import { errorMessages } from "../../errors/errors.mjs";
import { succesMessages } from "../../messages/messages.mjs";

export const objectMessages = [
	{
		it: "login an user with email jest_user_1@example.com",
		user: {
            email: "jest_user_1@example.com",
            password: "admin123"
        },
		expect: succesMessages.SuccesfullyDeletePlant
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
