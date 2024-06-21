import { describe, it, expect } from "@jest/globals";

import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import {
  objectMessages,
  objectStatusCodes,
} from "../../src/lib/getPlants/getPlantsOfPlantLocationObjects.mjs";

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

  objectMessages.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const response = await client.getAllPlantsOfPlantLocationOfUser(
        obj.userId,
        obj.plantLocationName
      );
      const result = JSON.parse(response.text);

      expect(result.message).toEqual(obj.expect);
    });
  });
});
