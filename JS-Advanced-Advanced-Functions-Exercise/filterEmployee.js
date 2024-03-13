function filterEmployees(data, criteria) {
    const employees = JSON.parse(data);
    let filteredEmployees = [];

    if (criteria === 'all') {
        filteredEmployees = employees;
    } else {
        const [key, value] = criteria.split('-');
        filteredEmployees = employees.filter(employee => employee[key] === value);
    }

    filteredEmployees.forEach((employee, index) => {
        console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
}

// Test cases
const data1 = `[
    {
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
    },
    {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    },
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }
]`;

const criteria1 = 'gender-Female';
filterEmployees(data1, criteria1);

const data2 = `[
    {
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
    },
    {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    },
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    },
    {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
    }
]`;

const criteria2 = 'last_name-Johnson';
filterEmployees(data2, criteria2);
