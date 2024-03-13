import { expect } from 'chai';
import { PaymentPackage } from '../PaymentPackage.js';

describe("PaymentPackage class", function () {
    it('should instantiate with valid parameters', () => {
        const hrPack = new PaymentPackage('HR Services', 1500);
        expect(hrPack.name).to.equal('HR Services');
        expect(hrPack.value).to.equal(1500);
    });

    it("should throw an error if instantiated with invalid parameters", function () {
        expect(() => new PaymentPackage()).to.throw("Name must be a non-empty string");
        expect(() => new PaymentPackage(123, -500)).to.throw("Name must be a non-empty string");
        expect(() => new PaymentPackage('Consultation', -800)).to.throw('Value must be a non-negative number')
    });

    it("should set and get VAT properly", function () {
        const consultationPack = new PaymentPackage('Consultation', 800)
        consultationPack.VAT = 25;
        expect(consultationPack.VAT).to.equal(25);
    });

    it("should set active status properly", function () {
        const partnershipPack = new PaymentPackage('Partnership Fee', 7000);
        partnershipPack.active = false;
        expect(partnershipPack.active).to.be.false;
    });

    it("should get active status properly", function () {
        const partnershipPack = new PaymentPackage('Partnership Fee', 7000);
        partnershipPack.active = true;
        expect(partnershipPack.active).to.be.true;
    });

    it("toString() method should append '(inactive)' label if package is inactive", () => {
          const partnerShipPack = new PaymentPackage('Partnership Free', 700);
          partnerShipPack.active = false;
            const expectedOutput = [
                   'Package: Partnership Fee (inactive)',
                   '- Value (excl. VAT): 7000',
                   '- Value (VAT 20%): 8400'
               ].join('\n');
               expect(partnershipPack.toString()).to.equal(expectedOutput);
    });
});