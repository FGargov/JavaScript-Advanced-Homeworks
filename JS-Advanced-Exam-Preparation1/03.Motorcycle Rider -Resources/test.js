import { expect } from "chai";
import { motorcycleRider } from './MotorcycleRider.js';

describe('MotorcycleRider', function() {
    describe('licenseRestriction', function() {
        it('should return license restrictions for category "AM"', function() {
            const result = MotorcycleRider.licenseRestriction('AM');
            assert.strictEqual(result, 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });

        it('should return license restrictions for category "A1"', function() {
            const result = MotorcycleRider.licenseRestriction('A1');
            assert.strictEqual(result, 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });

        it('should return license restrictions for category "A2"', function() {
            const result = MotorcycleRider.licenseRestriction('A2');
            assert.strictEqual(result, 'Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });

        it('should return license restrictions for category "A"', function() {
            const result = MotorcycleRider.licenseRestriction('A');
            assert.strictEqual(result, 'No motorcycle restrictions, and the minimum age is 24.');
        });

        it('should throw an error for invalid category', function() {
            assert.throw(() => {
                MotorcycleRider.licenseRestriction('B');
            }, 'Invalid Information!');
        });
    });

    describe('motorcycleShowroom', function() {
        it('should return available motorcycles matching criteria', function() {
            const result = MotorcycleRider.motorcycleShowroom(["125", "250", "600"], 200);
            assert.strictEqual(result, 'There are 2 available motorcycles matching your criteria!');
        });

        it('should throw an error if engineVolume is not an array', function() {
            assert.throw(() => {
                MotorcycleRider.motorcycleShowroom("not an array", 200);
            }, 'Invalid Information!');
        });

        it('should throw an error if maximumEngineVolume is not a number', function() {
            assert.throw(() => {
                MotorcycleRider.motorcycleShowroom(["125", "250", "600"], "not a number");
            }, 'Invalid Information!');
        });

        it('should throw an error if engineVolume is an empty array and maximumEngineVolume is less than 50', function() {
            assert.throw(() => {
                MotorcycleRider.motorcycleShowroom([], 30);
            }, 'Invalid Information!');
        });
    });

    describe('otherSpendings', function() {
        it('should calculate total price with discount for given equipment and consumables', function() {
            const result = MotorcycleRider.otherSpendings(['helmet', 'engine oil'], ['oil filter'], true);
            assert.strictEqual(result, 'You spend $273.00 for equipment and consumables with 10% discount!');
        });

        it('should calculate total price without discount for given equipment and consumables', function() {
            const result = MotorcycleRider.otherSpendings(['jacked'], ['engine oil', 'oil filter'], false);
            assert.strictEqual(result, 'You spend $400.00 for equipment and consumables!');
        });

        it('should throw an error if equipment is not an array', function() {
            assert.throw(() => {
                MotorcycleRider.otherSpendings("not an array", ['engine oil', 'oil filter'], true);
            }, 'Invalid Information!');
        });

        it('should throw an error if consumables is not an array', function() {
            assert.throw(() => {
                MotorcycleRider.otherSpendings(['helmet'], "not an array", true);
            }, 'Invalid Information!');
        });

        it('should throw an error if discount is not a boolean', function() {
            assert.throw(() => {
                MotorcycleRider.otherSpendings(['helmet'], ['engine oil', 'oil filter'], "not a boolean");
            }, 'Invalid Information!');
        });
    });
});