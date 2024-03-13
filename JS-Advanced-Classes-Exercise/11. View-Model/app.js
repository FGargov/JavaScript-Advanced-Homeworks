class Textbox {
    constructor(selector, invalidSymbolsRegex) {
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = invalidSymbolsRegex;
        this.value = this._elements[0].value;

        this._elements.forEach(element => {
            element.addEventListener('input', (e) => {
                this.value = e.target.value;describe("PaymentPackage class", function() {
                    it("should instantiate with valid parameters", function() {
                        const hrPack = new PaymentPackage('HR Services', 1500);
                        expect(hrPack.name).to.equal('HR Services');
                        expect(hrPack.value).to.equal(1500);
                    });

                    it("should throw an error if instantiated with invalid parameters", function() {
                        expect(() => new PaymentPackage()).to.throw('Name must be a non-empty string');
                        expect(() => new PaymentPackage(123, -500)).to.throw('Name must be a non-empty string');
                        expect(() => new PaymentPackage('Consultation', -800)).to.throw('Value must be a non-negative number');
                    });

                    it("should set and get VAT properly", function() {
                        const consultationPack = new PaymentPackage('Consultation', 800);
                        consultationPack.VAT = 25;
                        expect(consultationPack.VAT).to.equal(25);
                    });

                    it("should set and get active status properly", function() {
                        const partnershipPack = new PaymentPackage('Partnership Fee', 7000);
                        partnershipPack.active = false;
                        expect(partnershipPack.active).to.be.false;
                    });

                    it("toString() method should return the correct string representation", function() {
                        const hrPack = new PaymentPackage('HR Services', 1500);
                        const expectedOutput = [
                            'Package: HR Services',
                            '- Value (excl. VAT): 1500',
                            '- Value (VAT 20%): 1800'
                        ].join('\n');
                        expect(hrPack.toString()).to.equal(expectedOutput);
                    });

                    it("toString() method should append '(inactive)' label if package is inactive", function() {
                        const partnershipPack = new PaymentPackage('Partnership Fee', 7000);
                        partnershipPack.active = false;
                        const expectedOutput = [
                            'Package: Partnership Fee (inactive)',
                            '- Value (excl. VAT): 7000',
                            '- Value (VAT 20%): 8400'
                        ].join('\n');
                        expect(partnershipPack.toString()).to.equal(expectedOutput);
                    });
                });
            });
        });
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
        this._elements.forEach(element => {
            element.value = newValue;
        });
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
