function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textarea = document.querySelector('textarea');
      let input = JSON.parse(textarea.value);

      let restaurants = {};

      input.forEach(line => {
         let tokens = line.split(' - ');
         let restaurantName = tokens[0];
         let workersData = tokens[1].split(', ');

         let workers = workersData.map(worker => {
            let [name, salary] = worker.split(' ');
            return {
               name,
               salary: Number(salary)
            };
         });

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
               workers: [],
               getAverageSalary: function() {
                  return this.workers.reduce((sum, worker) => sum + worker.salary, 0) / this.workers.length;
               },
               getBestSalary: function() {
                  return Math.max(...this.workers.map(worker => worker.salary));
               }
            };
         }

         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(workers);
      });

      let bestRestaurantName = Object.keys(restaurants).sort((a, b) => restaurants[b].getAverageSalary() - restaurants[a].getAverageSalary())[0];
      let bestRestaurant = restaurants[bestRestaurantName];

      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      bestRestaurantOutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.getAverageSalary().toFixed(2)} Best Salary: ${bestRestaurant.getBestSalary().toFixed(2)}`;

      let workersOutput = document.querySelector('#workers p');
      workersOutput.textContent = bestRestaurant.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
   }
}
