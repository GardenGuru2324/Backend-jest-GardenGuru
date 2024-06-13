import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import {
	objectMessages,
	objectStatusCode,
	objectLoginSuccesUser
} from "../../src/lib/loginUser/loginUserObjects.mjs";

describe("Login user", () => {
	beforeAll(async () => {
		await initializeDatabase("Users");
	});

	afterAll(async () => {
		await clearDatabase("Users");
	});

	objectLoginSuccesUser.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.loginUser(obj.user);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult).toEqual(expect.objectContaining(obj.expect));
		});
	});

	objectMessages.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.loginUser(obj.user);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult.message).toEqual(obj.expect);
		});
	});

	objectStatusCode.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.loginUser(obj.user);

			expect(result.statusCode).toEqual(obj.expect);
		});
	});
});
