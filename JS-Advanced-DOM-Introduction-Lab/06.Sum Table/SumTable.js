function sumTable() {
    let table = document.querySelectorAll("table tr");
    let total = 0;
    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        let cost = cols[cols.length - 1].textContent; // взимаме числото на всеки ред - последния елемент от масивчето.
        total += Number(cost);
    }
    document.getElementById("sum").textContent = total;
}