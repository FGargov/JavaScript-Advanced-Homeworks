function extractText() {
    let itemNodes = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    for (let node of itemNodes) {
        textArea.value += node.textContent + "\n";
        console.log(textArea.value);
        console.log(textArea.outerHTML)

        let firstLi = document.getElementsByTagName('li')[0];
        console.log(firstLi)
        console.log(firstLi.parentElement)
        console.log(firstLi.parentNode)
    }
}