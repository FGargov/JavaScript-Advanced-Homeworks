function carsCommandExecutor() {
    const objects = {};

    function create(name, parentName) {
        if (parentName) {
            const parent = objects[parentName];
            objects[name] = Object.create(parent);
        } else {
            objects[name] = {};
        }
    }

    function set(name, key, value) {
        objects[name][key] = value;
    }

    function print(name) {
        const obj = objects[name];
        const properties = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                properties.push(`${key}:${obj[key]}`);
            }
        }
        // To get inherited properties as well
        let proto = Object.getPrototypeOf(obj);
        while(proto) {
            Object.keys(proto).forEach(key => {
                properties.push(`${key}:${proto[key]}`);
            });
            proto = Object.getPrototypeOf(proto);
        }

        console.log(properties.join(','));
    }

    return { create, set, print };
}

// Usage
const commandExecutor = carsCommandExecutor();
const commands = [
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
];

commands.forEach(command => {
    const [action, name, third, fourth] = command.split(' ');
    if (action === 'create') {
        if (third === 'inherits') {
            commandExecutor.create(name, fourth);
        } else {
            commandExecutor.create(name);
        }
    } else if (action === 'set') {
        commandExecutor.set(name, third, fourth);
    } else if (action === 'print') {
        commandExecutor.print(name);
    }
});
