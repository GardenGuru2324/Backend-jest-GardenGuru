import { describe, it, expect } from "@jest/globals";

import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { objectStatusCodes } from "../../src/lib/getPlants/getPlantsOfPlantLocationObjects.mjs";

describe("Get all the plants of a certain location of an user", () => {
  beforeAll(async () => {
    await initializeDatabase("PlantLocations");
    await initializeDatabase("Plants");
    await initializeDatabase("Users");
  });

  afterAll(async () => {
    await clearDatabase("PlantLocations");
    await clearDatabase("Plants");
    await clearDatabase("Users");
  });

  objectStatusCodes.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const result = await client.getAllPlantsOfPlantLocationOfUser(
        obj.userId,
        obj.plantLocationName
      );

      expect(result.statusCode).toEqual(obj.expect);
    });
  });
});
