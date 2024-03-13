function search() {
    let searchTerm = document.getElementById('searchText').value.toLowerCase();
    let towns = document.getElementById('towns').getElementsByTagName('li');
    let matches = 0;

    for (let li of towns) {
        li.style.fontWeight = 'normal';
        li.style.textDecoration = 'none';
    }

    for (let li of towns) {
        if (li.textContent.toLowerCase().includes(searchTerm) && searchTerm !== '') {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            matches++;
        }
    }

    let resultDiv = document.getElementById('result');
    if (searchTerm !== '') {
        resultDiv.textContent = matches + ' matches found';
    } else {
        resultDiv.textContent = '';
    }
}
