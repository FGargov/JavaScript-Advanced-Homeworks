class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._value = '';

        // Add event listeners to all elements matching the selector
        this.elements.forEach(el => {
            el.addEventListener('input', this._onInput.bind(this));
        });
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.elements.forEach(el => {
            el.value = val;
        });
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

    _onInput(event) {
        this.value = event.target.value;
    }
}

// Usage
let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = Array.from(document.getElementsByClassName('textbox'));

// Since `getElementsByClassName` returns a HTMLCollection, we need to convert it to an array to use forEach
inputs.forEach(input => {
    input.addEventListener('click', function() {
        console.log(textbox.value);
    });
});
