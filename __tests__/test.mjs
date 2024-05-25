import { describe, it, expect } from '@jest/globals';
import * as client from '../src/clients/clients.mjs';

describe('API V1', () => {
	it('Should return correct message', async () => {
		const result = await client.getApi();
		const expectedResult = JSON.parse(result.text);
		expect(expectedResult.message).toEqual('API V1');
	});
});
