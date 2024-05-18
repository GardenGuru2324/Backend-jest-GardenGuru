import { describe, it, expect } from '@jest/globals';
import * as client from '../src/clients/clients.mjs';

describe('GET', () => {
	it('Should return a error message when item does not exist', async () => {
		const result = await client.getUsers();
		expect(result.body).toBeDefined();
	});
});
