import * as superagent from 'superagent';
import 'dotenv/config';

const agent = superagent.agent();
const baseUrl = process.env.BASE_URL;

export const getApi = async () => {
	return await agent.get(baseUrl);
};

export const deletePlantOfUser = async (userId, plantId) => {
	return await agent.delete(`${baseUrl}/user/${userId}/plants/${plantId}`).catch((error) => {
		return error.response;
	});
};
