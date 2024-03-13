function toggle() {
    let content = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = 'More'
    } else {
        content.style.display = 'block';
        button.textContent = 'Less';
    }
}