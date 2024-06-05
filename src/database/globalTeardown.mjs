import * as superagent from 'superagent';
import 'dotenv/config';

const agent = superagent.agent();
const baseUrl = process.env.BASE_URL;

const globalTeardown = async () => {
	return await agent.get(`${baseUrl}/clearDatabase`);
};

export default globalTeardown;
