// Hero ve kartlardaki Play Now butonları için basit alert
const playButtons = document.querySelectorAll('[data-movie]');

playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const movie = btn.getAttribute('data-movie');
        alert('Playing: ' + movie);
    });
});

// Search input ile alt kartları başlığa göre filtreleme
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.suggestion-item');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(query) ? 'flex' : 'none';
    });
});