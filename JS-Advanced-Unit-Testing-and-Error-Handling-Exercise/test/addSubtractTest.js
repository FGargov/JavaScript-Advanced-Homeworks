import { expect } from 'chai';
import { createCalculator } from '../addSubtract.js';

describe('createCalculator function', () => {
    it('should intialize with a value of 0', () => {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it('should add numbers correctly', () => {
        let calculator = createCalculator();
        calculator.add(5);
        calculator.add(10);
        expect(calculator.get()).to.equal(15);
    });

    it('should subtract numbers correctly', () => {
        let calculator = createCalculator();
        calculator.subtract(5);
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-8);
    });

    it('should accept both strings and numbers as input', () => {
        let calculator = createCalculator();
        calculator.add(5);
        calculator.subtract('3');
        expect(calculator.get()).to.equal(2);
    });

    it('should handle invalid inputs gracefully', () => {
        const calculator = createCalculator();
        calculator.add('abc');
        calculator.subtract(undefined);
        expect(calculator.get()).to.be.NaN;
    });
})