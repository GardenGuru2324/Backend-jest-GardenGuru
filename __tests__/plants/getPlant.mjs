import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { objectStatusCodes } from "../../src/lib/getPlants/getPlantObjects.mjs";

describe("Fetches the information of a single plant", () => {
  beforeAll(async () => {
    await initializeDatabase("Plants");
  });

  afterAll(async () => {
    await clearDatabase("Plants");
  });

  objectStatusCodes.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const result = await client.getPlant(obj.plantId);

      expect(result.statusCode).toEqual(obj.expect);
    });
  });
});
