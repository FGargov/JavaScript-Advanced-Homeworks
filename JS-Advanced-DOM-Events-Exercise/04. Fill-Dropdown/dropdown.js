function addItem() {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;

    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    const select = document.getElementById('menu');
    select.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}