import * as superagent from "superagent";
import "dotenv/config";

const agent = superagent.agent();
const baseUrl = process.env.BASE_URL;

export const getApi = async () => {
	return await agent.get(baseUrl);
};

export const getPlant = async (plantId) => {
	return await agent.get(`${baseUrl}/plants/${plantId}`).catch((error) => {
		return error.response;
	});
};

export const getAllPlants = async () => {
	return await agent.get(`${baseUrl}/plants`);
};

export const getAllPlantsOfUser = async (userId) => {
	return await agent.get(`${baseUrl}/user/${userId}/plants`).catch((error) => {
		return error.response;
	});
};

export const deletePlantOfUser = async (userId, plantId) => {
	return await agent.delete(`${baseUrl}/user/${userId}/plants/${plantId}`).catch((error) => {
		return error.response;
	});
};

export const loginUser = async (user) => {
	return await agent
		.post(`${baseUrl}/login`)
		.send(user)
		.catch((error) => {
			return error.response;
		});
};

export const registerUser = async (newUser) => {
	return await agent
		.post(`${baseUrl}/register`)
		.send(newUser)
		.catch((error) => {
			return error.response;
		});
};
