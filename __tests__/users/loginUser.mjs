import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { objectMessages } from "../../src/lib/loginUser/loginUserObjects.mjs";

describe("Login user", () => {
	beforeAll(async () => {
		await initializeDatabase("Users");
	});

	afterAll(async () => {
		await clearDatabase("Users");
	});

	it(`Should login an user with email jest_user_1@example.com`, async () => {
		const user = {
			email: "jest_user_1@example.com",
			password: "admin123"
		};

		const expectedUser = {
			userId: "jest_user_1",
			userName: "jest_user_1",
			password: "$2a$12$N.7.wzAYOuSFIJdTetqNhOFJpRRyfUnCS/qzAUK2nhDjne2uF7YtS",
			ratingPlaced: true,
			profilePicture: "https://example.com/profile/johndoe.jpg",
			email: "jest_user_1@example.com",
			fullName: "jest_user_1",
			accountCreated: 1602960000
		};

		const result = await client.loginUser(user);

		const expectedResult = JSON.parse(result.text);

		expect(expectedResult).toEqual(expectedUser);
	});

	objectMessages.forEach((obj) => {
		it(`Should ${obj.it}`, async () => {
			const result = await client.loginUser(obj.user);

			const expectedResult = JSON.parse(result.text);

			expect(expectedResult.message).toEqual(obj.expect);
		});
	});
});
