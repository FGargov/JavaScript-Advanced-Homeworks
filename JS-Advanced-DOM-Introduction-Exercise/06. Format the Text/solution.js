function solve() {
    let text = document.getElementById('input').value;
    let sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (!sentences) return;
    let pText = [];

    for (let i = 0; i < sentences.length; i++) {
        pText.push(sentences[i].trim());

        if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
            let p = document.createElement('p');
            p.textContent = pText.join(' ');
            outputDiv.appendChild(p);
            pText = [];
        }
    }
}
