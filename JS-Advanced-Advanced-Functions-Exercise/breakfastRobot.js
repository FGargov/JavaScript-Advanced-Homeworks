function breakfastRobot() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(element, quantity) {
        stock[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        const requiredIngredients = Object.entries(recipes[recipe]);
        for (const [ingredient, amount] of requiredIngredients) {
            if (stock[ingredient] < amount * quantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }
        requiredIngredients.forEach(([ingredient, amount]) => {
            stock[ingredient] -= amount * quantity;
        });
        return 'Success';
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }

    function management(command) {
        const [action, item, quantity] = command.split(' ');
        switch (action) {
            case 'restock':
                return restock(item, Number(quantity));
            case 'prepare':
                return prepare(item, Number(quantity));
            case 'report':
                return report();
            default:
                return 'Invalid command';
        }
    }

    return management;
}

// Example usage:
let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
