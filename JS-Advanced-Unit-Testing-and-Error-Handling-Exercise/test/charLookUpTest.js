import {expect} from "chai";
import { lookupChar } from "../charLookUp.js";

describe('lookUpChar function', () => {
    it('should return undefined if first parameter is not a string', () => {
        let inputString = 123;
        let index = 0;

        let result = lookupChar(inputString, index);

        expect(result).to.equal(undefined);
    });

    it('should return undefined if second parameter is not a number', () => {
        let inputString = 'hello';
        let index = 'abc';

        let result = lookupChar(inputString, index);

        expect(result).to.equal(undefined);
    });

    it('should return "Incorrect index" if index is negative', () => {
        let inputString = 'hello';
        let index = -1;

        let result = lookupChar(inputString, index);

        expect(result).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if index is equal to string length', () => {
        let inputString = 'hello';
        let index = 5;

        let result = lookupChar(inputString, index);

        expect(result).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if index is greater than string length', () => {
        const inputString = 'hello';
        const index = 10;

        const result = lookupChar(inputString, index);

        expect(result).to.equal('Incorrect index');
    });

    it('should return correct character at specified index', () => {
        const inputString = 'hello';
        const index = 2;

        const result = lookupChar(inputString, index);

        expect(result).to.equal('l');
    });
})