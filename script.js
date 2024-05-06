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

function loadContent(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
            const dynamicBio = contentDiv.querySelector('.bio-text');
            if (dynamicBio) {
                dynamicBio.style.display = 'block';
            }
        })
        .catch(err => {
            console.log("Erro ao carregar a página: ", err);
            contentDiv.innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}

function showMainBio() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    document.getElementById('bio-one-piece').style.display = 'block';
}
