function listProcessor() {
    let collection = [];

    return {
        add: function(string) {
            collection.push(string);
        },
        remove: function(string) {
            collection = collection.filter(item => item !== string);
        },
        print: function() {
            console.log(collection.join(','));
        }
    };
}

// Test cases
const commands1 = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
const list1 = listProcessor();
commands1.forEach(command => {
    const [action, value] = command.split(' ');
    list1[action](value);
});

const commands2 = ['add pesho', 'add george', 'add peter', 'remove peter', 'print'];
const list2 = listProcessor();
commands2.forEach(command => {
    const [action, value] = command.split(' ');
    list2[action](value);
});
