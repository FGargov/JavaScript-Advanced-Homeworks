import { expect } from "chai";
import { isSymmetric } from "../checkForSymmetry.js";

describe('isSymmetric', () => {
    it('should returns false for non-array input', () => {
        expect(isSymmetric('a')).to.be.false;
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric({})).to.be.false
    });

    it('should true for symmetric arrays', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
    });

    it('returns true for single element array', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('returns true for empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('returns false for non-symmetric arrays', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
        expect(isSymmetric(['a', 'b', 'c', 'd'])).to.be.false;
        expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
    });

    it('should return false on isSymmetric([10,20,30,10])', () => {
        expect(isSymmetric([10, 20, 30, 10])).to.be.false;
    });

    it('should return false on isSymmetric([1,2,-1])', () => {
        expect(isSymmetric([1, 2, -1])).to.be.false;
    });

    it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
    });
});