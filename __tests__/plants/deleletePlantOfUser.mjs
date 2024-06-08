import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import {
	objectForChecksPlantToBeDeleted,
	objectMessages,
	objectStatusCode
} from "../../src/lib/deletePlant/deletePlantObjects.mjs";

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
