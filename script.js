// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const headings = document.querySelectorAll('th');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        headings.forEach(heading => {
            const headingText = heading.innerText.toLowerCase();
            const isVisible = headingText.includes(searchTerm);
            heading.style.display = isVisible ? '' : 'none';
        });
    });
});
