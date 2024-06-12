import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import {
  objectStatusCodes,
  objectMessages,
} from "../../src/lib/getPlants/getPlantObjects.mjs";

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

  objectMessages.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const response = await client.getPlant(obj.plantId);
      const result = JSON.parse(response.text);

      expect(result.message).toEqual(obj.expect);
    });
  });

  it(`Should return data of the plant`, async () => {
    const plantId = "jest_plant_1_user_1";
    const response = await client.getPlant(plantId);
    const result = JSON.parse(response.text);
    const allPlants = await client.getAllPlants();
    const expectedPlant = JSON.parse(allPlants.text).filter(
      (plant) => plant.plantId === plantId
    );

    expect(result).toEqual(expectedPlant);
  });
});
