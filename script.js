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
            // Assegura que a seção da biografia está visível e pronta para exibição
            const dynamicBio = contentDiv.querySelector('.bio-text');
            if (dynamicBio) {
                dynamicBio.style.display = 'flex';
            }
        })
        .catch(err => {
            console.error("Erro ao carregar a página: ", err);
            contentDiv.innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}

// Função para mostrar a biografia principal de One Piece
function showMainBio() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<div id="bio-one-piece" class="bio-text" style="display: block;">
        <div class="text-container">
            <h2>One Piece</h2>
            <p>Riqueza, fama e poder...</p>
        </div>
    </div>`;
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const displayStatus = window.getComputedStyle(sidebar).display;
    sidebar.style.display = displayStatus === 'none' ? 'block' : 'none';
}

function loadContent(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
            // Remova o comando que esconde os outros blocos, se houver
            const dynamicBio = contentDiv.querySelector('.bio-text');
            if (dynamicBio) {
                dynamicBio.style.display = 'flex';  // Garante que a biografia seja mostrada
            }
        })
        .catch(err => {
            console.error("Erro ao carregar a página: ", err);
            contentDiv.innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}


