function generateReport() {
    // Преобразува колекцията от всички input елементи в масив
    let inputElements = Array.from(document.getElementsByTagName('input'));

    // Инициализира масив за резултатите
    const resultArr = [];
    // Преобразува всички редове на таблицата (tr елементи) в масив
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    // Инициализира масив, който ще държи индексите на колоните, които са чекнати
    const checkedCols = [];

    // Итерира през всички редове на таблицата
    for (let i = 0; i < tableRows.length; i++) {
        // Взима текущия ред
        const row = tableRows[i];
        // Създава обект, който ще съдържа данните от реда
        const obj = {};

        // Итерира през всички деца (td или th елементи) на текущия ред
        for (let y = 0; y < row.children.length; y++) {
            // Взима текущия елемент (клетка) от реда
            const element = row.children[y];
            // Ако е първият ред (заглавната част на таблицата)
            if (i == 0) {
                // Проверява дали детето на елемента (чекбоксът) е маркирано
                if (element.children[0].checked) {
                    // Ако е, добавя индекса на колоната в масива с чекнатите колони
                    checkedCols.push(y);
                }
                // Продължава със следващата итерация на външния цикъл
                continue;
            }

            // Ако текушият индекс на колоната е в масива на чекнатите колони
            if (checkedCols.includes(y)) {
                // Взима името на свойството от името на чекбокса
                let propertyName = inputElements[y].name;
                // Добавя стойността на клетката към обекта с данни за реда
                obj[propertyName] = element.textContent;
            }
        }
        // Ако не е първият ред, добавя обекта с данни за реда в масива с резултатите
        if (i !== 0) {
            resultArr.push(obj);
        }
    }

    // Преобразува масива с резултатите в JSON низ и го поставя в textarea с ID 'output'
    document.getElementById('output').value = JSON.stringify(resultArr);
}
