import { describe, it, expect } from "@jest/globals";
import * as client from "../../src/clients/clients.mjs";
import { objectStatusCodes } from "../../src/lib/updateProfilePicture/updateProfilePictureObjects.mjs";

describe("Update profile picture", () => {
  objectStatusCodes.forEach((obj) => {
    it(`Should ${obj.it}`, async () => {
      const result = await client.updateProfilePicture(obj.userId, obj.newProfilePicture);

      expect(result.statusCode).toEqual(obj.expect);
    });
  });

  it(`Should return new profile picture`, async () => {
    const userId = "jest_user_2";
    const newProfilePicture = "https://picsum.photos/400";

    await client.updateProfilePicture(userId, newProfilePicture);

    const userProfile = await client.getUserProfile(userId);
    const currentProfilePicture = JSON.parse(userProfile.text).profilePicture;

    expect(newProfilePicture).toEqual(currentProfilePicture);
  });
});
