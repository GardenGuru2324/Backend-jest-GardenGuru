import { succesMessages } from "../../messages/messages.mjs";

const randomNumber = Math.floor(Math.random() * 1000);

export const objectStatusCode = {
  it: "succesfully add a plant and return correct status code",
  newPlant: {
    plantId: `jest_plant_${randomNumber}_user_1`,
    plantName: "New Plant Based On 1_1",
    locationId: "jest_plantLocation_1",
    plantImage: "https://dummyFoto.jpg",
    plantedDate: 1602960000,
    userId: "jest_user_1",
    isVegetable: false,
    plantGrowthHabit: "Climbing",
    plantAvgHeight: 1,
    plantMaxHeight: 2,
    plantGrowthRate: "Fast",
    plantDaysToHarvest: 0,
    plantRowSpacing: 0,
    plantMinTemp: 18,
    plantMaxTemp: 30,
  },
  expect: 201,
};

export const objectMessage = {
  it: "succesfully add a plant and return correct status message",
  newPlant: {
    plantId: `jest_plant_${randomNumber}_user_1`,
    plantName: "New Plant Based On 1_1",
    locationId: "jest_plantLocation_1",
    plantImage: "https://dummyFoto.jpg",
    plantedDate: 1602960000,
    userId: "jest_user_1",
    isVegetable: false,
    plantGrowthHabit: "Climbing",
    plantAvgHeight: 1,
    plantMaxHeight: 2,
    plantGrowthRate: "Fast",
    plantDaysToHarvest: 0,
    plantRowSpacing: 0,
    plantMinTemp: 18,
    plantMaxTemp: 30,
  },
  expect: succesMessages.succesfullyAddPlant,
};
