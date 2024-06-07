import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { succesMessages } from "../../src/messages/messages.mjs";
import { errorMessages } from "../../src/errors/errors.mjs";

const objectForChecksPlantToBeDeleted = [
	{
		it: `Plant with plantId jest_plant_1_user_1 should be deleted`,
		plantId: "jest_plant_1_user_1"
	},
	{
		it: "Plant with plantId jest_plant_3_user_2 should be deleted",
		plantId: "jest_plant_3_user_2"
	}
];

const objectMessages = [
	{
		it: "delete plant with plantId jest_plant_1_user_1 of user and return correct message",
		userId: "jest_user_1",
		plantId: "jest_plant_1_user_1",
		expect: succesMessages.SuccesfullyDeletePlant
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

const objectStatusCode = [
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

describe("Delete plant of user", () => {
	beforeAll(async () => {
		await initializeDatabase("Plants");
		await initializeDatabase("Users");
	});

	afterAll(async () => {
		await clearDatabase("Plants");
		await clearDatabase("Users");
	});

	objectMessages.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.deletePlantOfUser(obj.userId, obj.plantId);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult.message).toEqual(obj.expect);
		});
	});

	objectStatusCode.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.deletePlantOfUser(obj.userId, obj.plantId);

			expect(result.statusCode).toEqual(obj.expect);
		});
	});

	objectForChecksPlantToBeDeleted.forEach((obj) => {
		it(`${obj.it}`, async () => {
			const result = await client.getAllPlants();

			const expectedResult = JSON.parse(result.text);
			const expectedPlant = expectedResult.find((plant) => plant.plantId === obj.plantId);

			expect(expectedPlant).toBeUndefined();
		});
	});
});
