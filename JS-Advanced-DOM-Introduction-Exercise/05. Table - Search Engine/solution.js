function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchValue = document.getElementById('searchField').value.toLowerCase();
      let row = document.querySelectorAll('.container tbody tr');

      row.forEach(function (row) {
         row.classList.remove('select')
      });

      let count = 0;

      row.forEach(function (row) {
         let name = row.cells[0].textContent.toLowerCase();
         let email = row.cells[1].textContent.toLowerCase();
         if (name.includes(searchValue) || email.includes(searchValue)) {
            row.classList.add('select');
            count++;
         }
      });

      let resultText = count + " matches found";
      document.getElementById('result').textContent = resultText;
   }
}