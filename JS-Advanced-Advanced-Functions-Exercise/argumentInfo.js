function argumentInfo(...args) {
    const typeCounts = {};

    args.forEach(arg => {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!typeCounts[type]) {
            typeCounts[type] = 0;
        }
        typeCounts[type]++;
    });

    const sortedTypes = Object.keys(typeCounts).sort((a, b) => {
        return typeCounts[b] - typeCounts[a] || args.findIndex(arg => typeof arg)
    });

    sortedTypes.forEach(type => {
        console.log(`${type} = ${typeCounts[type]}`);
    })
}

const helloWorld = function () { console.log('Hello world!');}

argumentInfo('cat', 42, helloWorld);