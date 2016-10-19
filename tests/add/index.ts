import { assert } from 'assert'
import { add } from './../src/add.ts'

describe('add()', () => {
    it('should return 4 when params are 2, 2', () => {
        const sum = add(2, 2);

        assert.equal(4, sum);
    });
});
