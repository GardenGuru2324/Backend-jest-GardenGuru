import * as superagent from 'superagent';
import 'dotenv/config';

const agent = superagent.agent();
const baseUrl = process.env.BASE_URL;

const globalSetup = async () => {
	return await agent.get(`${baseUrl}/initializeDatabase`);
};

export default globalSetup;
