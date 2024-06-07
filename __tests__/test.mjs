import { describe, it, expect } from '@jest/globals';
import * as client from '../src/clients/clients.mjs';
import { initializeDatabase } from '../src/database/initializeDatabase.mjs';
import { clearDatabase } from '../src/database/clearDatabase.mjs';

describe('Plant tips of user', () => {
	beforeAll(async () => {
		return await initializeDatabase('PlantTips');
	});

	afterAll(async () => {
		return await clearDatabase('PlantTips');
	});

	it('Should return correct message', async () => {
		const result = await client.getApi();
		const expectedResult = JSON.parse(result.text);
		expect(expectedResult.message).toEqual('API V1');
	});
});
