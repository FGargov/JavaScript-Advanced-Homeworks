function add(n) {
    const innerAdd = function (x) {
        return add(n + x);
    }

    innerAdd.toString = function () {
        return n;
    }

    return innerAdd;
}

console.log(add(1)); // Output should be 1
console.log(add(1)(6)(-3)); // Output should be 4