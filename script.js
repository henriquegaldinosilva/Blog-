// Função para incrementar o contador de reações nos posts
function addReaction(button) {
    const countSpan = button.querySelector('.count');
    let currentCount = parseInt(countSpan.textContent, 10);
    countSpan.textContent = currentCount + 1;
}
