import { clearDatabase } from "../database/clearDatabase.mjs";

const globalTeardown = async () => {
  console.log("Running global teardown");
  await clearDatabase("Users");
  console.log("Global teardown done");
};

export default globalTeardown;
