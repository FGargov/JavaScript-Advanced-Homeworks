class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let maxAverageSalary = 0;

        for (const department in this.departments) {
            let averageSalary = this.departments[department]
                .reduce((acc, curr) => acc + curr.salary, 0) / this.departments[department].length;

            if (averageSalary > maxAverageSalary) {
                bestDepartment = department;
                maxAverageSalary = averageSalary;
            }
        }

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${maxAverageSalary.toFixed(2)}\n`;
        result += this.departments[bestDepartment]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(e => `${e.name} ${e.salary} ${e.position}`)
            .join('\n');

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
