import * as superagent from 'superagent';
import 'dotenv/config';

const agent = superagent.agent();
const baseUrl = process.env.BASE_URL;

export const getApi = async () => {
	return await agent.get(baseUrl);
};
