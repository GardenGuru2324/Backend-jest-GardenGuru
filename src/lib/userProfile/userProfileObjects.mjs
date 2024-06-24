import { errorMessages } from "../../errors/errors.mjs";

export const objectMessages = [
  {
    it: "not return user profile when user does not exist and returns correct message",
    userId: "not_exiting_user",
    expect: errorMessages.userNotFound,
  },
];

export const objectStatusCode = [
  {
    it: "not return user profile when user does not exist and returns correct statusCode",
    userId: "not_exiting_user",
    expect: 404,
  },
];
