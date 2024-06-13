import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import {
	objectMessages,
	objectRegsiterSuccesUser,
	objectStatusCode
} from "../../src/lib/registerUser/registerUserObjects.mjs";

describe("Register user", () => {
	beforeAll(async () => {
		await initializeDatabase("Users");
	});

	afterAll(async () => {
		await clearDatabase("Users");
	});

	objectRegsiterSuccesUser.forEach((obj) => {
		// Werkt maar wil de database niet vervuilen om de 2 weken laten runnen!
		it.skip(`Should ${obj.it}`, async () => {
			const result = await client.registerUser(obj.newUser);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult.email).toEqual(obj.expect.email);
			expect(expectedResult.fullName).toEqual(obj.expect.fullName);
			expect(result.statusCode).toBe(obj.expect.statusCode);
		});
	});

	objectMessages.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.registerUser(obj.newUser);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult.message).toEqual(obj.expect);
		});
	});

	objectStatusCode.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.registerUser(obj.newUser);

			expect(result.statusCode).toEqual(obj.expect);
		});
	});
});
