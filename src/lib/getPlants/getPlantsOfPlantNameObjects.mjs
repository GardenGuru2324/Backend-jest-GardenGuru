import { errorMessages } from "../../errors/errors.mjs";

export const objectStatusCodes = [
  {
    it: "get plants with search value, of user and return correct status code",
    userId: "jest_user_1",
    plantName: "Monstera Deliciosa",
    expect: 200,
  },
  {
    it: "get plants with search when te value is small, of user and return correct status code",
    userId: "jest_user_1",
    plantName: "Monstera",
    expect: 200,
  },
  {
    it: "get plants with search when te value is close to, of user and return correct status code",
    userId: "jest_user_1",
    plantName: "Mons",
    expect: 200,
  },
  {
    it: "not get plants with search value, of user and return correct status code",
    userId: "jest_user_1",
    plantName: "does Not Exist",
    expect: 404,
  },
];

export const objectMessages = [
  {
    it: "not get plants with search value, of user and return correct error message",
    userId: "jest_user_1",
    plantName: "does Not Exist",
    expect: errorMessages.plantNotFound,
  },
];
