function loadContent(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(err => {
            contentDiv.innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}