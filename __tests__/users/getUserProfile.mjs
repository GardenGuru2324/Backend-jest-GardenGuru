import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { objectMessages, objectStatusCode } from "../../src/lib/userProfile/userProfileObjects.mjs";

describe("Get profile of user by userId", () => {
  beforeAll(async () => {
    await initializeDatabase("Users");
  });

  afterAll(async () => {
    await clearDatabase("Users");
  });

  objectMessages.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const result = await client.getUserProfile(obj.userId);

      const expectedResult = JSON.parse(result.text);

      expect(expectedResult.message).toEqual(obj.expect);
    });
  });

  objectStatusCode.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const result = await client.getUserProfile(obj.userId);

      expect(result.statusCode).toEqual(obj.expect);
    });
  });

  it(`Should get user profile`, async () => {
    const expectedUser = {
      accountCreated: 1602960000,
      email: "jest_user_1@example.com",
      fullName: "jest_user_1",
      profilePicture: "https://example.com/profile/johndoe.jpg",
      userName: "jest_user_1",
    };

    const result = await client.getUserProfile("jest_user_1");

    const expectedResult = JSON.parse(result.text);

    expect(expectedResult).toEqual(expectedUser);
  });
});
