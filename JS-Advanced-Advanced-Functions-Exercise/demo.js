//Inner Method Context

// const obj = {
//     name: 'Peter',
//     outer() {
//         console.log(this); // Object {name: "Peter"}
//         function inner() { console.log(this); }
//         inner();
//     }
// }
// obj.outer();

// //Arrow Function Context
//
// const obj = {
//     name: 'Peter',
//     outer() {
//         console.log(this); // Object {name: "Peter"}
//         const inner = () => console.log(this);
//         inner();
//     }
// }
// obj.outer(); // Object {name: "Peter"}


//Call() - explicit binding
// function introduce(language, hobby) {
// console.log(`My name is ${this.name}. I program in ${language} and I love ${hobby}.`);
// }
//
// const user = {
//     name: 'Alice'
// };
//
// introduce.call(user, 'JavaScript', 'MTB');

// //Apply() -
// const obj1 = { name: 'John' };
// const obj2 = { name: 'Alice' };
// function sayName(greeting) {
//     console.log(greeting + ', ' + this.name);
// }
// // Извикваме функцията sayName с контекст obj1 и предаваме параметър на функцията чрез apply()
// sayName.apply(obj1, ['Hello']); // извежда "Hello, John"
// // Извикваме функцията sayName с контекст obj2 и предаваме параметър на функцията чрез apply()
// sayName.apply(obj2, ['Hi']); // извежда "Hi, Alice"

// //Bind()
// const obj = {
//     name: 'Alice'
// };
// function sayName() {
//     console.log(`My name is ${this.name}.`);
// }
// const boundFunction = sayName.bind(obj);
//
// boundFunction();


//First class function
// //Подаване на функция като аргумент на друга функция:
// function sayHello() {
//     return "Hello ";
// }
// function greeting(helloMessage, name) {
//     return helloMessage() + name;
// }
// console.log(greeting(sayHello, "JavaScript!")); // "Hello JavaScript!"


////Връщане на функция от друга функция:
// function sayHello() {
//     return function() {
//         console.log('Hello!');
//     }
// }
// const myFunc = sayHello();
// myFunc(); // "Hello!"


//// Присвояване на функция като стойност на променлива:
// const write = function() {
//     return "Hello world!";
// }
// console.log(write()); // "Hello world!"

////Higher-Order Functions
// function createGreeter(greeting) {
//     return function(name) {
//         console.log(greeting + ', ' + name + '!');
//     }
// }
// const greetInEnglish = createGreeter('Hello');
// const greetInSpanish = createGreeter('Hola');
// greetInEnglish('Alice'); // "Hello, Alice!"
// greetInSpanish('Carlos'); // "Hola, Carlos!"


////Predicate
// let array1 = [5, 12, 8, 130, 44];
// let found = array1.find(isFound);
// function isFound(element) {
//     return element > 10; //True or false
// }
// console.log(found);


////Built-in Higher Order Functions
// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(number => number * number);
// console.log(squares); // [1, 4, 9, 16]
// //друг пример
// const even = numbers.filter(number => number % 2 === 0);
// console.log(even); // [2, 4]


////Pure and impure functions:
// const increment = n => n + 1;
// console.log(increment(1)); // Връща 2 без да променя никакво външно състояние.
//
// const add = (x, y) => x + y;
// console.log(add(5, 3)); // Връща 8


////Referential transperancy:
// function add(a, b) { return a + b; }
// function mult(a, b) { return a * b; }
//
// let x = add(2, mult(3, 4));
// console.log(x)

////Closure:
// function createCounter() {
//     let count = 0;
//     return function() {
//         count += 1;
//         console.log(count);
//     };
// }
// const myCounter = createCounter();
// myCounter(); // 1
// myCounter(); // 2
// myCounter(); // 3


////Carrying
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(sum(3)(5)(6)); // 14
