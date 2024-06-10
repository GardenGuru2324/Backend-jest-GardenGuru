import { errorMessages } from "../../errors/errors.mjs";
import { succesMessages } from "../../messages/messages.mjs";

export const objectStatusCodes = [
  {
    it: "get plants of user and return correct status code",
    userId: "jest_user_1",
    expect: 200,
  },
  {
    it: "not get any plant of user who does not exist and return correct status code",
    userId: "jest_user_0",
    expect: 400,
  },
  {
    it: "not get any plant of user with no plants and return correct status code",
    userId: "jest_user_3",
    expect: 409,
  },
];

export const objectMessages = [
  {
    it: "get plants of user and return correct message",
    userId: "jest_user_1",
    expect: succesMessages.succesfullyGetPlants,
  },
  {
    it: "not get any plant of user with no plants and return correct error message",
    userId: "jest_user_3",
    expect: errorMessages.userHasNoPlants,
  },
  {
    it: "not get any plant of user who does not exist and return correct error message",
    userId: "jest_user_0",
    expect: errorMessages.userNotFound,
  },
];

export const objectData = [
  {
    it: "Should return a list of all the plants of the user",
    userId: "jest_user_1",
    expect: ["jest_plant_1_user_1", "jest_plant_2_user_1"],
  },
];
