export const objectStatusCodes = [
  {
    it: "get plant and return correct status code",
    plantId: "jest_plant_1_user_1",
    expect: 200,
  },
  {
    it: "not get plant and return correct status code",
    userId: "jest_plant_0_user_0",
    expect: 404,
  },
];
