import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";

describe("Login user", () => {
	beforeAll(async () => {
		await initializeDatabase("Users");
	});

	afterAll(async () => {
		await clearDatabase("Users");
	});

	objectMessages.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.deletePlantOfUser(obj.userId, obj.plantId);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult.message).toEqual(obj.expect);
		});
	});
});
