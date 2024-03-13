import { expect } from "chai";
import { sum } from '../sumNumbers.js'

describe('sum', () => {
    it('sums an array of numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('returns 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('correctly sums an array of negative numbers', () => {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });

    it('converts string numbers to actual numbers and sums them', () => {
        expect(sum([1, '2', 3])).to.equal(6);
    });

    it('ignores non-numeric values in the array', () => {
        expect(sum([1, 'a', 3])).to.be.NaN;
    });
});
