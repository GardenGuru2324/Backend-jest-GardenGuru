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
    
    });
