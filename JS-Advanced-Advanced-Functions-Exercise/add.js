function solve(initial) {
    let current = initial;
    return function (num) {
        current += num;
        return current;
    }
}

let add5 = solve(5);
console.log(add5(2)); // Output: 7 (5 + 2)
console.log(add5(3)); // Output: 10 (previous result 7 + 3)