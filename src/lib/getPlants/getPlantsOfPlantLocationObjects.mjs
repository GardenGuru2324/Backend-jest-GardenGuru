import { errorMessages } from "../../errors/errors.mjs";

export const objectStatusCodes = [
  {
    it: "get plants of location, of user and return correct status code",
    userId: "jest_user_1",
    plantLocationName: "Living Room",
    expect: 200,
  },
  {
    it: "not get any plant of location that does not exist, of user and return correct status code",
    userId: "jest_user_1",
    plantLocationName: "does Not Exist",
    expect: 404,
  },
  {
    it: "not get any plant of location with no plants, of user and return correct status code",
    userId: "jest_user_1",
    plantLocationName: "Office",
    expect: 409,
  },
];

