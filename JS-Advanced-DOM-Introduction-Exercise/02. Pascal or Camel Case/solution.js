function solve() {
    let text = document.getElementById('text').value.trim();
    let convention = document.getElementById('naming-convention').value.trim();

    function convertString(str, namingConvention) {
        let words = str.toLowerCase().split(' ');

        let convertedWords = words.map(function(word, index) {
            if (namingConvention === 'Pascal Case' || (namingConvention === 'Camel Case' && index > 0)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });

        return convertedWords.join('');
    }

    let result;
    if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
        result = 'Error!';
    } else {
        result = convertString(text, convention);
    }

    document.getElementById('result').textContent = result;
}
