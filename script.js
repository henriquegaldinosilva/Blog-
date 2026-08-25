// Função para incrementar reações
function addReaction(button) {
    const countSpan = button.querySelector('.count');
    let currentCount = parseInt(countSpan.textContent, 10);
    countSpan.textContent = currentCount + 1;
}

// Alternância entre tema Claro e Escuro
function setTheme(theme) {
    const body = document.body;
    const btnDark = document.getElementById('theme-dark-btn');
    const btnLight = document.getElementById('theme-light-btn');
    const icons = document.querySelectorAll('.icon-img');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        btnDark.classList.add('active');
        btnLight.classList.remove('active');
        
        // Atualiza a cor dos ícones SVG via URL para o tom de verde mais claro
        icons.forEach(img => {
            img.src = img.src.replace('color=%232d6a4f', 'color=%2352b788');
        });
    } else {
        body.classList.remove('dark-theme');
        btnLight.classList.add('active');
        btnDark.classList.remove('active');
        
        // Retorna os ícones para a cor verde original
        icons.forEach(img => {
            img.src = img.src.replace('color=%2352b788', 'color=%232d6a4f');
        });
    }
}
