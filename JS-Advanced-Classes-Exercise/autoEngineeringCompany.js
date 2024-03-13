function createRegister(data) {
    const register = {};

    data.forEach(entry => {
        const [brand, model, produced] = entry.split(" | ");
        const producedCars = parseInt(produced);

        if (!register[brand]) {
            register[brand] = {};
        }

        if (!register[brand][model]) {
            register[brand][model] = producedCars;
        } else {
            register[brand][model] += producedCars;
        }
    });

    for (const brand in register) {
        console.log(brand);
        for (const model in register[brand]) {
            console.log(`###${model} -> ${register[brand][model]}`);
        }
    }
}

const data = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
];

createRegister(data);
