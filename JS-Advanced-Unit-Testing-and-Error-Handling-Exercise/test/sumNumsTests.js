import { expect } from 'chai';
import { sum } from '../sumNums.js';


describe("sum(arr) - sum array of numbers", function () {
    it('should return 8 for [3,5]', function () {
        expect(sum(3, 5)).to.equal(8);
    });
});

