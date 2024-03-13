function solve() {
    // First, populate the "To" dropdown with the conversion options
    document.getElementById('selectMenuTo').innerHTML = `
        <option value="binary">Binary</option>
        <option value="hexadecimal">Hexadecimal</option>
    `;

    // Add event listener to the convert button
    document.querySelector('button').addEventListener('click', function () {
        // Get the input number value and the selected conversion type
        let number = document.getElementById('input').value;
        let conversionType = document.getElementById('selectMenuTo').value;
        let result;

        // Check the conversion type and perform the conversion
        if (conversionType === 'binary') {
            result = parseInt(number, 10).toString(2);
        } else if (conversionType === 'hexadecimal') {
            result = parseInt(number, 10).toString(16).toUpperCase();
        }

        // Display the result in the result input field
        document.getElementById('result').value = result;
    });
}
