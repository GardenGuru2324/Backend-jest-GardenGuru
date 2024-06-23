import { errorMessages } from "../../errors/errors.mjs";

export const objectStatusCodes = [
  {
    it: "get plants of location, of user and return correct status code",
    userId: "jest_user_1",
    plantLocationName: "jest_plantLocation_1",
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
    plantLocationName: "jest_plantLocation_2",
    expect: 409,
  },
];

export const objectMessages = [
  {
    it: "not get any plant of location that does not exist, of user and return correct error message",
    userId: "jest_user_1",
    plantLocationName: "does Not Exist",
    expect: errorMessages.plantLocationNotFound,
  },
  {
    it: "not get any plant of loction with no plants, of user and return correct error message",
    userId: "jest_user_1",
    plantLocationName: "jest_plantLocation_2",
    expect: errorMessages.userHasNoPlantsOfLocation,
  },
];
