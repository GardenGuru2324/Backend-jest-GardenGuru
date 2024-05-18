import * as superagent from 'superagent';

const agent = superagent.agent();

export const getUsers = async () => {
	return await agent.get('https://backend-api-garden-guru.vercel.app/api/v1/users');
};
