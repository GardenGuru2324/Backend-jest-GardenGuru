import { errorMessages } from "../../errors/errors.mjs";

export const objectStatusCodes = [
  {
    it: "get plant and return correct status code",
    plantId: "jest_plant_1_user_1",
    expect: 200,
  },
  {
    it: "not get plant and return correct status code",
    plantId: "jest_plant_0_user_0",
    expect: 404,
  },
];

export const objectMessages = [
  {
    it: "not get plant and return correct error message",
    plantId: "jest_plant_0_user_0",
    expect: errorMessages.plantNotFound,
  },
];
