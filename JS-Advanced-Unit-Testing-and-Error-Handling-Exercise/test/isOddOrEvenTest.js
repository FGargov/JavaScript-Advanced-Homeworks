import { expect } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";

describe('isOddOrEven function',() => {
    it('should return undefined when input is not a string', () => {
        let input = 123;
        let result = isOddOrEven(input);

        expect(result).to.equal(undefined);
    });

    it('should return "even" for a string with odd length', () => {
        // Arrange
        const input = 'hello';
        // Act
        const result = isOddOrEven(input);

        // Assert
        expect(result).to.equal('odd');
    });

    it('should return "even" for a string with even length', () => {
        // Arrange
        const input = 'code';
        // Act
        const result = isOddOrEven(input);

        // Assert
        expect(result).to.equal('even');
    });

    it('should work correctly with multiple strings', () => {
        let strings = ['hello', 'world', 'javascript'];

        strings.forEach((str, index) => {
           let result = isOddOrEven(str);
            if (index % 2 === 0) {
                expect(result).to.equal('even');
            } else {
                expect(result).to.equal('odd');
            }
        });
    });
});