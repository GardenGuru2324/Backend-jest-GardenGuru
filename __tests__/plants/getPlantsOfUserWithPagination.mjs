import { describe, it, expect } from "@jest/globals";

import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { errorMessages } from "../../src/errors/errors.mjs";

describe("Get plants of user", () => {
  beforeAll(async () => {
    await initializeDatabase("Plants");
  });

  afterAll(async () => {
    await clearDatabase("Plants");
  });

  it(`Should return correct message when user has no more plants`, async () => {
    const response = await client.getAllPlantsOfUserWithPagination("jest_user_1", "12");
    const result = JSON.parse(response.text);

    expect(result.message).toEqual(errorMessages.userHasNoPlants);
  });

  // Need more data
  it.skip(`Should get different plant if page is 2`, async () => {
    const responsePageOne = await client.getAllPlantsOfUserWithPagination("jest_user_1", "1");
    const resultPageOne = JSON.parse(responsePageOne.text);

    const responsePageTwo = await client.getAllPlantsOfUserWithPagination("jest_user_1", "2");
    const resultPageTwo = JSON.parse(responsePageTwo.text);

    const areDifferent = resultPageOne.some((plant, index) => {
      return plant.id !== resultPageTwo[index]?.plantId;
    });

    expect(areDifferent).toBe(true);
  });
});
