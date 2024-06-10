import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import {
  objectStatusCodes,
  objectMessages,
} from "../../src/lib/deletePlant/getPlantsObjects.mjs";

describe("Get plants of user", () => {
  beforeAll(async () => {
    await initializeDatabase("Plants");
    await initializeDatabase("Users");
  });

  afterAll(async () => {
    await clearDatabase("Plants");
    await clearDatabase("Users");
  });

  objectStatusCodes.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const result = await client.getAllPlantsOfUser(obj.userId);

      expect(result.statusCode).toEqual(obj.expect);
    });
  });

  objectMessages.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const response = await client.getAllPlantsOfUser(obj.userId);
      const result = JSON.parse(response.text);

      expect(result.message).toEqual(obj.expect);
    });
  });
});
