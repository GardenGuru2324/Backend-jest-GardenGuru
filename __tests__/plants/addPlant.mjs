import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { initializeDatabase } from "../../src/database/initializeDatabase.mjs";
import { clearDatabase } from "../../src/database/clearDatabase.mjs";
import { objectStatusCode, objectMessage } from "../../src/lib/addPlant/addPlantObjects.mjs";

describe("Add a plant", () => {
  beforeAll(async () => {
    await initializeDatabase("Plants");
  });

  afterAll(async () => {
    await clearDatabase("Plants");
  });

  it.skip(`Should ${objectStatusCode.it}`, async () => {
    const result = await client.addPlant(objectStatusCode.newPlant);

    expect(result.statusCode).toEqual(objectStatusCode.expect);
  });

  it.skip(`Should ${objectMessage.it}`, async () => {
    const result = await client.addPlant(objectMessage.newPlant);
    const expectedResult = JSON.parse(result.text);

    expect(expectedResult.message).toEqual(objectMessage.expect);
  });
});
