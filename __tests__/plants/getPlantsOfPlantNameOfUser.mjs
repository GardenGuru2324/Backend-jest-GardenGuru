import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { objectMessages, objectStatusCodes } from "../../src/lib/getPlants/getPlantsOfPlantNameObjects.mjs";

describe("Get all the plants with plant name of an user", () => {
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
      const result = await client.getAllPlantsOfPlantNameOfUser(obj.userId, obj.plantName);
      expect(result.statusCode).toEqual(obj.expect);
    });
  });

  objectMessages.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const response = await client.getAllPlantsOfPlantNameOfUser(obj.userId, obj.plantName);
      const result = JSON.parse(response.text);
      expect(result.message).toEqual(obj.expect);
    });
  });

  it(`Should return the plants with plant name, of specific user`, async () => {
    const response = await client.getAllPlantsOfPlantNameOfUser("jest_user_1", "Monstera Deliciosa");
    const result = JSON.parse(response.text);

    const allPlants = await client.getAllPlants();
    const expectedPlants = JSON.parse(allPlants.text).filter((plant) => plant.userId === "jest_user_1" && plant.plantName === "Monstera Deliciosa");

    expect(result).toEqual(expectedPlants);
  });

  it(`Should return the plants with plant name if the name is small , of specific user`, async () => {
    const response = await client.getAllPlantsOfPlantNameOfUser("jest_user_1", "Monstera");
    const result = JSON.parse(response.text);

    const allPlants = await client.getAllPlants();
    const expectedPlants = JSON.parse(allPlants.text).filter((plant) => plant.userId === "jest_user_1" && plant.plantName === "Monstera");

    expect(result).toEqual(expectedPlants);
  });

  it(`Should return the plants with plant name if the name is close to , of specific user`, async () => {
    const response = await client.getAllPlantsOfPlantNameOfUser("jest_user_1", "Mons");
    const result = JSON.parse(response.text);

    const allPlants = await client.getAllPlants();
    const expectedPlants = JSON.parse(allPlants.text).filter((plant) => plant.userId === "jest_user_1" && plant.plantName === "Mons");

    expect(result).toEqual(expectedPlants);
  });
});
