import { errorMessages } from "../../errors/errors.mjs";
import { succesMessages } from "../../messages/messages.mjs";

export const objectForChecksPlantToBeDeleted = [
	{
		it: `Plant with plantId jest_plant_1_user_1 should be deleted`,
		plantId: "jest_plant_1_user_1"
	},
	{
		it: "Plant with plantId jest_plant_3_user_2 should be deleted",
		plantId: "jest_plant_3_user_2"
	}
];

export const objectMessages = [
	{
		it: "delete plant with plantId jest_plant_1_user_1 of user and return correct message",
		userId: "jest_user_1",
		plantId: "jest_plant_1_user_1",
		expect: succesMessages.succesfullyDeletePlant
	},
	{
		it: "not delete plant of user when user does not exists and return correct message",
		userId: "12345",
		plantId: "jest_plant_1_user_1",
		expect: errorMessages.userNotFound
	},
	{
		it: "not delete plant when plant does not exists and return correct message",
		userId: "jest_user_1",
		plantId: "12345",
		expect: errorMessages.plantNotFound
	},
	{
		it: "not delete plant when user is not owner of the plant and return correct message",
		userId: "jest_user_2",
		plantId: "jest_plant_1_user_1",
		expect: errorMessages.plantNotFound
	}
];

export const objectStatusCode = [
	{
		it: "delete plant with plantId jest_plant_3_user_2 of user and return correct statusCode",
		userId: "jest_user_2",
		plantId: "jest_plant_3_user_2",
		expect: 200
	},
	{
		it: "not delete plant of user when user does not exists and return correct statusCode",
		userId: "12345",
		plantId: "jest_plant_1_user_1",
		expect: 404
	},
	{
		it: "not delete plant when plant does not exists and return correct statusCode",
		userId: "jest_user_1",
		plantId: "12345",
		expect: 404
	},
	{
		it: "not delete plant when user is not owner of the plant and return correct statusCode",
		userId: "jest_user_2",
		plantId: "jest_plant_1_user_1",
		expect: 404
	}
];
