import { initializeDatabase } from "../database/initializeDatabase.mjs";

const globalSetup = async () => {
  console.log("\n" + "Running global setup");
  await initializeDatabase("Users");
  console.log("Global setup done");
};

export default globalSetup;
