import {expect} from "chai";
import {mathEnforcer} from "../mathEnforcer.js";

describe('mathEnforcer', function() {
    describe('addFive', function() {
        it('should return undefined when the parameter is not a number', function() {
            expect(mathEnforcer.addFive('test')).to.be.undefined;
        });

        it('should add 5 to the parameter if it is a number', function() {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });

        it('should add 5 to a negative number', function() {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('should add 5 to a floating-point number and be close to the correct value', function() {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
        });
    });

    describe('subtractTen', function() {
        it('should return undefined when the parameter is not a number', function() {
            expect(mathEnforcer.subtractTen('test')).to.be.undefined;
        });

        it('should subtract 10 from the parameter if it is a number', function() {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });

        it('should subtract 10 from a negative number', function() {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        });

        it('should subtract 10 from a floating-point number and be close to the correct value', function() {
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });
    });

    describe('sum', function() {
        it('should return undefined if the first parameter is not a number', function() {
            expect(mathEnforcer.sum('test', 5)).to.be.undefined;
        });

        it('should return undefined if the second parameter is not a number', function() {
            expect(mathEnforcer.sum(5, 'test')).to.be.undefined;
        });

        it('should return the sum of two parameters if they are numbers', function() {
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
        });

        it('should return the sum of a negative and a positive number', function() {
            expect(mathEnforcer.sum(-5, 10)).to.equal(5);
        });

        it('should return the sum of two floating-point numbers and be close to the correct value', function() {
            expect(mathEnforcer.sum(5.5, 4.4)).to.be.closeTo(9.9, 0.01);
        });
    });
});