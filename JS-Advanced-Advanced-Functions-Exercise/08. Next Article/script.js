function getArticleGenerator(articles) {
    let currentIndex = 0;

    return function() {
        if (currentIndex < articles.length) {
            let articleElement = document.createElement('article');
            articleElement.textContent = articles[currentIndex];
            document.getElementById('content').appendChild(articleElement);
            currentIndex++;
        }
    };
}
