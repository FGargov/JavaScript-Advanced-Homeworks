function calculator() {
    let elem1, elem2, resultElem;

    return {
        init: function(selector1, selector2, resultSelector) {
            elem1 = document.querySelector(selector1);
            elem2 = document.querySelector(selector2);
            resultElem = document.querySelector(resultSelector);
        },
        add: function() {
            const result = Number(elem1.value) + Number(elem2.value);
            resultElem.value = result;
        },
        subtract: function() {
            const result = Number(elem1.value) - Number(elem2.value);
            resultElem.value = result;
        }
    };
}

const calculate = calculator();
window.onload = function() {
    calculate.init('#num1', '#num2', '#result');
    document.getElementById('sumButton').onclick = calculate.add;
    document.getElementById('subtractButton').onclick = calculate.subtract;
}
