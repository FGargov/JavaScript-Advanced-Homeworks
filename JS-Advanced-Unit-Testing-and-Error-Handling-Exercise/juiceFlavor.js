function juiceFlavors(input) {
    const juiceQuantities = {};
    const bottlesProduced = {};

    input.forEach(juiceInfo => {
        let [juiceName, quantity] = juiceInfo.split(' => ');
        quantity = Number(quantity);

        // Initialize juice quantity if not already present
        if (!juiceQuantities[juiceName]) {
            juiceQuantities[juiceName] = 0;
        }

        // Update juice quantity
        juiceQuantities[juiceName] += quantity;

        // Check if there's enough juice for at least one bottle
        while (juiceQuantities[juiceName] >= 1000) {
            // Initialize bottles count for the juice if not already present
            if (!bottlesProduced[juiceName]) {
                bottlesProduced[juiceName] = 0;
            }

            // Update bottles count and decrease juice quantity
            bottlesProduced[juiceName]++;
            juiceQuantities[juiceName] -= 1000;
        }
    });

    // Print the bottles produced
    for (const juice in bottlesProduced) {
        console.log(`${juice} => ${bottlesProduced[juice]}`);
    }
}

// Test the function with the provided examples
juiceFlavors(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
juiceFlavors(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);
